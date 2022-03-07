module.exports = {
    components: true,
    trailingSlash: true,
    modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios'],
    axios: {
      baseURL: 'http://localhost:8000/api/front/'
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