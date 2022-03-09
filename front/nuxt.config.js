module.exports = {
    components: true,
    trailingSlash: true,
    target: 'static',
    modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios'],
    axios: {
      baseURL: 'https://crisptechllc.rubarants.com/api/front/'
    },
    env: {
        // BASE_URL: process.env.BASE_URL || 'http://localhost:3000'
    },
    css:[
        '@fortawesome/fontawesome-svg-core/styles.css',
        '@/assets/css/custom.css',
    ],
    plugins: [
      '~/plugins/fontawesome.js'
    ]
  }