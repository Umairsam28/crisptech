module.exports = {
    components: true,
    trailingSlash: true,
    target: 'static',
    modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios'],
    bootstrapVue: {
      icons: true
    },
    axios: {
       baseURL: 'http://localhost:8000/api/front/',
      //baseURL: 'https://crisptechllc.digitalservicescorp.com/api/front/'
    },
    env: {
      STRIPE_SK: 'sk_test_51JLEABHp3dFXYI5tM0HRVjZzXGfnlPU0t6ieRmOUEooGJ33JenoZa366jAoPThF2JyZOsJwZawA4u7m7oAavBdHn004eykG4NS',
      STRIPE_PK: 'pk_test_51JLEABHp3dFXYI5tFIp2RCQqCSDBART8mH4DsUuZ2pEEZn6zBC8Qu3vyJiPMOEZsL4tSsDbpI3jyib712AX8uhyy00lti3M11l'
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