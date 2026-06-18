import tailwindcss from '@tailwindcss/vite'
import { site } from './data/site'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    // Overridden by NUXT_TELEGRAM_BOT_TOKEN / NUXT_TELEGRAM_CHAT_ID env vars.
    telegramBotToken: '',
    telegramChatId: '',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'hy' },
      title: site.seo.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: site.seo.description },
        { name: 'keywords', content: site.seo.keywords.join(', ') },
        { name: 'theme-color', content: '#5BC0EB' },
        { property: 'og:title', content: site.seo.title },
        { property: 'og:description', content: site.seo.ogDescription },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'hy_AM' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500&family=Noto+Sans+Armenian:wght@400;500;600;700;800&family=Noto+Serif+Armenian:wght@400;500;600;700;800;900&display=swap',
        },
      ],
    },
  },
})
