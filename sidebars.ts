import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Top-level entries take a `sidebar-section-icon-*` className to get the
// section-header styling and icon defined in src/css/theme.css.
const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Get started',
      className: 'sidebar-section-icon-get-started',
      collapsed: false,
      items: [
        'get-started/what-is-choreo-cloud',
        'get-started/sign-up',
        'get-started/key-concepts',
        'get-started/try-a-sample',
      ],
    },
    {
      type: 'category',
      label: 'Manage your organization',
      className: 'sidebar-section-icon-manage',
      collapsed: false,
      items: [
        'manage/organizations',
        'manage/view-organization-details',
        'manage/access-control',
        'manage/invite-users',
        'manage/enterprise-sign-in',
        'manage/manage-service-contacts',
        'manage/subscriptions-and-billing',
        'manage/container-registries',
        'manage/audit-logs',
      ],
    },
    {
      type: 'category',
      label: 'Observability',
      className: 'sidebar-section-icon-observability',
      collapsed: false,
      items: [
        'observability/alerts',
        'observability/notification-channels',
        'observability/alert-rules',
        'observability/alert-history',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      className: 'sidebar-section-icon-architecture',
      collapsed: false,
      items: ['architecture/overview', 'architecture/data-planes'],
    },
    {
      type: 'category',
      label: 'Security and compliance',
      className: 'sidebar-section-icon-security',
      collapsed: false,
      items: ['security/overview', 'security/data-residency'],
    },
    {
      type: 'category',
      label: 'Reference',
      className: 'sidebar-section-icon-reference',
      collapsed: false,
      items: ['reference/faq', 'reference/glossary'],
    },
    {
      type: 'doc',
      id: 'support',
      className: 'sidebar-section-icon-support',
    },
  ],
};

export default sidebars;
