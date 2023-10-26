export default defineNuxtConfig({
  // Disable generating the shim for *.vue files
  typescript: {
    shim: false,
  },

  // Enable server side rendering
  ssr: true,

  // App configuration
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Blueprint website',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          name: 'description',
          content:
            "Experience the Codeflex difference: Blueprint is an ERP solution tailored to streamline your business processes and enhance operational efficiency. Explore our innovative and scalable platform, designed to meet your company's unique needs.",
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
    },
  },

  runtimeConfig: {
    // Private keys - only available within server-side

    // Public keys - will be exposed to the client-side
    public: {
      domainBaseUrl: process.env.DOMAIN_BASE_URL,
    },
  },

  plugins: [{ src: '~/plugins/aos', mode: 'client', ssr: false }],

  // Global style imports
  css: ['@/assets/css/theme.css'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_main.scss" as *;',
        },
      },
    },
  },

  nitro: {
    compressPublicAssets: true,

    prerender: {
      routes: [
        '/',
        '/about',
        '/services',
        '/pricing',
        '/contact',
        '/privacy-policy',
      ],
    },
  },

  // Transpile gsap
  build: {
    transpile: ['gsap'],
  },

  experimental: {
    payloadExtraction: false,
  },
});
