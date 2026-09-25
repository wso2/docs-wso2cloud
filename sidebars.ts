import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Top-level entries take a `sidebar-section-icon-*` className to get the
// section-header styling and icon defined in src/css/theme.css.
const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Get Started',
      className: 'sidebar-section-icon-get-started',
      collapsed: false,
      items: ['get-started/what-is-wso2-cloud'],
    },
    {
      type: 'category',
      label: 'Manage',
      className: 'sidebar-section-icon-manage',
      collapsed: false,
      items: [
        'manage/organization',
        'manage/users-and-roles',
        'manage/billing',
        'manage/project',
        'manage/data-planes',
        'manage/environments',
      ],
    },
    {
      type: 'doc',
      id: 'support',
      className: 'sidebar-section-icon-support',
    },
    {
      type: 'doc',
      id: 'hosting-environment-details',
      className: 'sidebar-section-icon-hosting',
    },
    {
      type: 'doc',
      id: 'architecture',
      className: 'sidebar-section-icon-architecture',
    },
  ],
};

export default sidebars;
