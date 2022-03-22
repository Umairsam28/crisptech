<template>
  <div>
    <Header />
    <Nuxt />
    <RequestForQuote />
    <Footer />
  </div>
</template>
<script>
export default {
  mounted(){
    this.$store.commit('cart/initialize')
    this.$store.dispatch('checkLogin')
  }
}
</script>