# WSO2 Cloud Docs

Documentation site for WSO2 Cloud, built with [Docusaurus](https://docusaurus.io/).

## Prerequisites

Node.js 20 or above.

## Install

```bash
npm install
```

## Local development

```bash
npm start
```

Starts a dev server on <http://localhost:3000> with live reload.

> Static assets in `static/` are copied at startup. Restart the server after
> changing them.

## Build

```bash
npm run build
npm run serve
```

`npm run build` writes a static site to `build/`. Use `npm run serve` to preview
it: the site is configured with `baseUrl: '/docs-wso2cloud/'`, so serving
`build/` from a plain web root will not resolve assets.

## Type checking

```bash
npm run typecheck
```

## Layout

The site uses the standard Docusaurus classic theme: navbar, docs sidebar and
footer. The home page redirects to `docs/intro`. Pages live in `docs/`, and the
sidebar is generated from that folder.

Search uses
[`@easyops-cn/docusaurus-search-local`](https://github.com/easyops-cn/docusaurus-search-local).
The index is built at `npm run build` time, so search returns no results under
`npm start`. Use `npm run build && npm run serve` to test it.

## Deploy

```bash
npm run deploy
```

Publishes to GitHub Pages, per `organizationName` and `projectName` in
`docusaurus.config.ts`.

## License

Apache License 2.0. See [LICENSE](LICENSE).
