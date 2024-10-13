export default {
  head: {
    title: 'hsa-games',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    script: [
      
    ]
  },


  css: [
   
  ],

  plugins: [
   
  ],


  components: true,

  
  buildModules: [
    '@nuxt/postcss8', 
    '@nuxtjs/tailwindcss', 
  ],

  
  modules: [
  
  ],

  
  build: {
 
  },


  serverMiddleware: [
    { path: '/api', handler: '~/server/server.js' } 
  ],

  server: {
    port: 3000, 
    host: 'localhost' 
  }
}
