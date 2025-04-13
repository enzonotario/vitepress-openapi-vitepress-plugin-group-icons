import { defineConfig } from 'vitepress';
import { useSidebar } from 'vitepress-openapi'
import spec from '../../public/openapi.json' with { type: 'json' }

const sidebar = useSidebar({
  spec,
  // Optionally, you can specify a link prefix for all generated sidebar items.
  linkPrefix: '/operations/',
})

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'VitePress OpenAPI',
  description: 'Generate documentation from OpenAPI specifications.',

  themeConfig: {
    nav: [{ text: 'API Reference', link: '/introduction' }],

    sidebar: [
      {
        text: 'By Tags',
        items: [
          {
            text: 'Introduction',
            link: '/introduction',
          },
          ...sidebar.itemsByTags(),
        ],
      },
      {
        text: 'By Operations',
        items: [
          ...sidebar.generateSidebarGroups(),
        ],
      },
      {
        text: 'By Paths',
        items: [
          ...sidebar.itemsByPaths(),
        ],
      },
      {
        text: 'One Page',
        items: [
          { text: 'One Page', link: '/one-page' },
          { text: 'Without Sidebar', link: '/without-sidebar' },
        ],
      },
    ],
  },
});
