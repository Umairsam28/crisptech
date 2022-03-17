module.exports = {
    components: true,
    trailingSlash: true,
    target: 'static',
    modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios'],
    axios: {
      baseURL: 'http://localhost:8000/api/front/',//'https://crisptechllc.rubarants.com/api/front/'
    },
    env: {
        // BASE_URL: process.env.BASE_URL || 'http://localhost:3000'
    },
    css:[
      '@/assets/css/custom.css',
      '@fortawesome/fontawesome-svg-core/styles.css',
    ],
    plugins: [
      '~/plugins/fontawesome.js'
    ]
  }