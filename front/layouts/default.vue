<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
export default {
  mounted(){
    this.$store.commit('cart/initialize')
  }
}
</script>