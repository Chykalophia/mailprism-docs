import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'index',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Getting Started',
        description:
          'Connect Gmail, create your first rule, and find your way around MailPrism — in about five minutes.',
        slug: '/getting-started',
      },
      items: [
        'getting-started/quick-start',
        'getting-started/connecting-gmail',
        'getting-started/first-rule',
        'getting-started/dashboard',
        'getting-started/onboarding',
      ],
    },
    {
      type: 'category',
      label: 'Your Inbox',
      link: {
        type: 'generated-index',
        title: 'Your Inbox',
        description: 'Read, organize, and act on your mail right inside MailPrism.',
        slug: '/inbox',
      },
      items: [
        'inbox/overview',
        'inbox/reading-email',
        'inbox/email-actions',
        'inbox/bulk-actions',
        'inbox/composing',
        'inbox/labels',
        'inbox/search-and-filters',
        'inbox/keyboard-shortcuts',
        'inbox/toolbar',
        'inbox/quick-actions',
        'inbox/unsubscribe',
      ],
    },
    {
      type: 'category',
      label: 'Rules & Automation',
      link: {
        type: 'generated-index',
        title: 'Rules & Automation',
        description:
          'Rules are how MailPrism works for you: when an email matches your conditions, your actions run automatically.',
        slug: '/rules',
      },
      items: [
        'rules/overview',
        'rules/conditions',
        'rules/actions',
        'rules/building-with-ai',
        'rules/testing',
        'rules/library',
        'rules/multi-account',
        'rules/scheduling-recurrence',
        'rules/import-export',
        'rules/suggestions',
        'rules/best-practices',
      ],
    },
    {
      type: 'category',
      label: 'AI Features',
      link: {
        type: 'generated-index',
        title: 'AI Features',
        description:
          'How MailPrism reads context — category, urgency, sentiment — and how you stay in control of it.',
        slug: '/ai',
      },
      items: [
        'ai/overview',
        'ai/classification',
        'ai/custom-categories',
        'ai/smart-rules',
        'ai/preferences-tuning',
        'ai/writing-profiles',
        'ai/insights',
        'ai/summaries',
        'ai/pattern-learning',
        'ai/privacy-and-consent',
        'ai/byok',
        'ai/usage-and-cost',
      ],
    },
    {
      type: 'category',
      label: 'Response Tracking',
      link: {
        type: 'generated-index',
        title: 'Response Tracking & Follow-ups',
        description:
          'Never lose a thread — track what needs action, what you’re awaiting, and follow up automatically.',
        slug: '/tracking',
      },
      items: [
        'tracking/overview',
        'tracking/modes',
        'tracking/profiles',
        'tracking/labels-and-sync',
        'tracking/exemptions',
        'tracking/nudges-and-reminders',
        'tracking/auto-responders',
      ],
    },
    {
      type: 'category',
      label: 'Contacts',
      link: {
        type: 'generated-index',
        title: 'Contacts',
        description: 'Organize senders and track your relationship with them.',
        slug: '/contacts',
      },
      items: ['contacts/overview', 'contacts/categories-and-relationships'],
    },
    {
      type: 'category',
      label: 'Analytics & Logs',
      link: {type: 'doc', id: 'analytics'},
      items: ['analytics/per-rule-analytics', 'analytics/rule-logs-and-undo'],
    },
    {
      type: 'category',
      label: 'Productivity',
      link: {
        type: 'generated-index',
        title: 'Productivity',
        description: 'Templates, signatures, and other time-savers.',
        slug: '/productivity',
      },
      items: ['productivity/templates', 'productivity/signatures'],
    },
    {
      type: 'category',
      label: 'Integrations',
      link: {
        type: 'generated-index',
        title: 'Integrations',
        description: 'Connect MailPrism with the other tools you use.',
        slug: '/integrations',
      },
      items: [
        'integrations/overview',
        'integrations/calendar',
        'integrations/ai-providers',
      ],
    },
    {
      type: 'category',
      label: 'Account & Settings',
      link: {
        type: 'generated-index',
        title: 'Account & Settings',
        description: 'Manage your account, security, billing, and preferences.',
        slug: '/account',
      },
      items: [
        'account/account-security',
        'account/gmail-connection',
        'account/workspaces-and-teams',
        'account/billing',
        'account/notifications',
        'account/privacy-and-data',
        'account/appearance',
        'account/preferences',
      ],
    },
    {
      type: 'category',
      label: 'Help',
      link: {
        type: 'generated-index',
        title: 'Help',
        description:
          'Answers, fixes, definitions, and how MailPrism keeps your data safe.',
        slug: '/help',
      },
      items: [
        'help/faq',
        'help/troubleshooting',
        'help/privacy-security',
        'help/glossary',
      ],
    },
  ],
};

export default sidebars;
