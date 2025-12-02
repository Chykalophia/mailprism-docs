import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'MailPrism',
  tagline: 'See your inbox in a new light',
  favicon: 'img/favicon.ico',

  url: 'https://docs.mailprism.ai',
  baseUrl: '/',

  organizationName: 'Chykalophia',
  projectName: 'mailprism-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Chykalophia/mailprism-docs/tree/main/',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        docsRouteBasePath: '/',
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'MailPrism',
      logo: {
        alt: 'MailPrism Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://app.mailprism.ai',
          label: 'Open App',
          position: 'right',
          className: 'navbar-app-link',
        },
        {
          href: 'https://github.com/Chykalophia/MailPrism',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/getting-started/quick-start',
            },
            {
              label: 'Features',
              to: '/features/email-rules',
            },
            {
              label: 'FAQ',
              to: '/faq',
            },
          ],
        },
        {
          title: 'Product',
          items: [
            {
              label: 'Pricing',
              href: 'https://mailprism.ai/pricing',
            },
            {
              label: 'Open App',
              href: 'https://app.mailprism.ai',
            },
            {
              label: 'Roadmap',
              href: 'https://app.mailprism.ai/settings/roadmap',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              href: 'https://mailprism.ai/privacy',
            },
            {
              label: 'Terms of Service',
              href: 'https://mailprism.ai/terms',
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} MailPrism. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    metadata: [
      {name: 'keywords', content: 'mailprism, email automation, gmail, ai email, inbox management, email rules'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {property: 'og:type', content: 'website'},
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
