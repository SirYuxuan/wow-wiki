import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  wikiSidebar: [
    {
      type: 'doc',
      id: 'overview/index',
      label: '整合包介绍',
    },
    {
      type: 'doc',
      id: 'plugins/index',
      label: '插件列表',
    },
    {
      type: 'doc',
      id: 'config/init-setup',
      label: '快速安装',
    },
    {
      type: 'doc',
      id: 'faq/index',
      label: '常见问题',
    },
    {
      type: 'doc',
      id: 'showcase/index',
      label: '界面展示',
    },
    {
      type: 'category',
      label: '更新记录',
      link: {
        type: 'doc',
        id: 'changelog/index',
      },
      collapsed: false,
      items: [
        {
          type: 'category',
          label: '2026',
          link: {
            type: 'doc',
            id: 'changelog/2026/index',
          },
          collapsed: false,
          items: ['changelog/2026/2026-04-03-wiki-rebuild'],
        },
      ],
    },
  ],
};

export default sidebars;
