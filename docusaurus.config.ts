import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '雨轩魔兽整合包 Wiki',
  tagline: '整合包介绍、快速安装、问题排查与更新记录',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'SirYuxuan',
  projectName: 'wow-wiki',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '雨轩魔兽整合包 Wiki',
      logo: {
        alt: '雨轩魔兽整合包 Wiki Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/config/init-setup',
          position: 'left',
          label: '快速安装',
          activeBaseRegex: '^/docs/config(?:/|$)',
        },
        {
          to: '/docs/changelog',
          position: 'left',
          label: '更新记录',
          activeBaseRegex: '^/docs/changelog(?:/|$)',
        },
        {
          to: '/docs/faq',
          position: 'left',
          label: '常见问题',
          activeBaseRegex: '^/docs/faq(?:/|$)',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} 雨轩魔兽整合包 Wiki`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java', 'go'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
