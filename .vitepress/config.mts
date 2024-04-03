import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rust App",
  description: "Docs for RustApp",
  locales: {
    root: {
      label: 'Русский',
      lang: 'ru',
      link: '/ru',
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en',
    },
  },
  themeConfig: {
    i18nRouting: true,
    logo: { src: '/assets/favicon.ico' },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Обзор', link: '/ru/base-features' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: generateSidebar([{
      resolvePath: '/en/',
      scanStartPath: 'en',

      useTitleFromFileHeading: true,
      useFolderTitleFromIndexFile: true,

      includeFolderIndexFile: false,
      includeRootIndexFile: false,
      
      sortMenusByFrontmatterOrder: true,
      frontmatterOrderDefaultValue: 5
    }, {
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

  /**
   * 
  vite: {
    plugins: [
      // add plugin
      AutoSidebar({
        path: '/',
        titleFromFile: true,
        ignoreList: ['node_modules', '.vitepress', '.git', 'en'],
        sideBarResolved: (data) => { 
          Object.keys(data).forEach((lang) => {
            if (lang != '/en/' && lang != '/ru/') {
              return;
            }

            const elements = data[lang][0].items as any[];

            elements.forEach(el => {
              if (!el.items) {
                return;
              }

              console.log(el.items);
            });
          });

          return data;
        },
      })
    ]
  }
   */
})
