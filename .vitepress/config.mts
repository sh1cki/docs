import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rust App",
  
  description: "Docs for RustApp",
  locales: {
    /*root: {
      label: 'Русский',
      lang: 'ru',
      link: '/ru',
      themeConfig: {
        nav: [
          { text: 'Обзор функций', link: '/ru/base-features' },
        ],
      }
    },*/
    /*en: {
      label: 'English',
      lang: 'en',
      link: '/en',
      themeConfig: {
        nav: [
          { text: 'Base features', link: '/en/base-features' },
        ],
      }
    },*/
  },
  themeConfig: {
    i18nRouting: true,
    logo: { src: './assets/logo.png' },

    sidebar: generateSidebar([/*{
      resolvePath: '/en/',
      scanStartPath: 'en',

      useTitleFromFileHeading: true,
      useFolderTitleFromIndexFile: true,

      includeFolderIndexFile: false,
      includeRootIndexFile: false,
      
      sortMenusByFrontmatterOrder: true,
      frontmatterOrderDefaultValue: 5
    }, */{
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
