import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rust App",
  
  description: "Docs for RustApp",
  locales: {
  },
  themeConfig: {
    i18nRouting: true,
    logo: { src: '/favicon.ico' },
    

    sidebar: generateSidebar([{
      resolvePath: '/ru/',
      scanStartPath: 'ru',

      useTitleFromFileHeading: true,
      useFolderTitleFromIndexFile: true,

      includeFolderIndexFile: false,
      includeRootIndexFile: false,
      
      sortMenusByFrontmatterOrder: true,
      frontmatterOrderDefaultValue: 5
    }]),

    search: { provider: 'local' },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rust-app-io' },
    ],
  },
})
