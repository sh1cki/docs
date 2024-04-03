import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';

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

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/ru/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    search: { provider: 'local' },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rust-app-io' },
    ],
  },
  
  appearance: 'force-dark',

  vite: {
    plugins: [
      // add plugin
      AutoSidebar({
        path: '/',
        titleFromFile: true,
        ignoreIndexItem: true,
        ignoreList: ['node_modules', '.vitepress', '.git'],
        sideBarResolved: (data) => { 
          Object.keys(data).forEach((lang) => {
            if (lang != '/en/' && lang != '/ru/') {
              return;
            }

            const translations: Record<string, { en: string, ru: string }> = {
              'getting-started': {
                ru: 'Начало работы',
                en: 'Getting started'
              }
            }

            const elements = data[lang][0].items as any[];

            elements.forEach(v => {
              const title = v.text;
              if (!translations[title]) {
                return;
              }
  
              v.text = translations[title][lang == '/en/' ? 'en' : 'ru'];
            });
          });

          return data;
        },
      })
    ]
  }
})
