import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
        title: 'Getting Started',
        description: 'Get up and running with MailPrism in minutes.',
        slug: '/getting-started',
      },
      items: [
        'getting-started/quick-start',
        'getting-started/connecting-gmail',
        'getting-started/first-rule',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      link: {
        type: 'generated-index',
        title: 'Features',
        description: 'Explore everything MailPrism can do for you.',
        slug: '/features',
      },
      items: [
        'features/email-rules',
        'features/ai-analysis',
        'features/response-tracking',
        'features/contacts',
        'features/email-templates',
      ],
    },
    {
      type: 'category',
      label: 'Settings',
      link: {
        type: 'generated-index',
        title: 'Settings',
        description: 'Configure MailPrism to work exactly how you want.',
        slug: '/settings',
      },
      items: [
        'settings/account-settings',
        'settings/workspace-settings',
        'settings/ai-preferences',
      ],
    },
    'faq',
    'pricing-comparison',
  ],
};

export default sidebars;
