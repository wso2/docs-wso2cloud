# Build stage: produce the static site in /app/build.
# Never build under /workspace: the CI Kaniko build mounts that path and drops it from the image.
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Runtime stage: serve the static site with nginx as a non-root user.
FROM nginx:1.27-alpine

# Pull patched OS packages so the Trivy scan does not block on HIGH/CRITICAL CVEs.
# `apk update` runs first because it fails when an index cannot be fetched;
# `apk add` alone exits 0 on a fetch failure and silently upgrades nothing.
RUN apk update \
    && apk add --upgrade \
      libcrypto3 libssl3 libxml2 libpng libexpat musl musl-utils nghttp2-libs zlib c-ares \
    && rm -rf /var/cache/apk/*

# The platform requires a UID between 10000 and 20000.
RUN addgroup -g 10001 -S choreouser \
    && adduser -u 10001 -G choreouser -S -D -H choreouser

COPY --chown=10001:10001 nginx.conf /etc/nginx/nginx.conf
COPY --chown=10001:10001 --from=builder /app/build /usr/share/nginx/html

RUN chown -R 10001:10001 /var/cache/nginx /etc/nginx

USER 10001
EXPOSE 8080
CMD ["nginx", "-g", "daemon off; pid /tmp/nginx.pid;"]
