import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'MailPrism',
  tagline: 'See your inbox in a new light',
  favicon: 'img/favicon.svg',

  url: 'https://docs.mailprism.ai',
  baseUrl: '/',

  organizationName: 'Chykalophia',
  projectName: 'mailprism-docs',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {rel: 'apple-touch-icon', href: '/img/apple-touch-icon.png'},
    },
    {
      tagName: 'meta',
      attributes: {name: 'theme-color', content: '#667eea'},
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Chykalophia/mailprism-docs/tree/main/',
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('@fontsource-variable/inter/index.css'),
            require.resolve('@fontsource/jetbrains-mono/index.css'),
            './src/css/custom.css',
          ],
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
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    navbar: {
      title: 'MailPrism',
      hideOnScroll: false,
      logo: {
        alt: 'MailPrism',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://mailprism.ai',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'https://app.mailprism.ai',
          label: 'Open App',
          position: 'right',
          className: 'navbar-app-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'MailPrism',
        src: 'img/logo.svg',
        href: 'https://mailprism.ai',
        height: 40,
      },
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Getting Started', to: '/getting-started/quick-start'},
            {label: 'Rules & Automation', to: '/rules/overview'},
            {label: 'AI Features', to: '/ai/overview'},
            {label: 'FAQ', to: '/help/faq'},
          ],
        },
        {
          title: 'Product',
          items: [
            {label: 'Website', href: 'https://mailprism.ai'},
            {label: 'Open App', href: 'https://app.mailprism.ai'},
            {label: 'Pricing', href: 'https://mailprism.ai/pricing'},
          ],
        },
        {
          title: 'Legal',
          items: [
            {label: 'Privacy Policy', href: 'https://mailprism.ai/privacy'},
            {label: 'Terms of Service', href: 'https://mailprism.ai/terms'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} MailPrism by Chykalophia. See your inbox in a new light.`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ['bash', 'json', 'regex'],
    },
    metadata: [
      {name: 'keywords', content: 'mailprism, email automation, gmail, ai email, inbox management, email rules, response tracking'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {property: 'og:type', content: 'website'},
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
