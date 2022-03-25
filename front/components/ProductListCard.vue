<template>
  <div class="inner">
    <nuxt-link :to="'/product/' + product.slug">
      <div class="img-holder">
        <img :src="product.home_image" alt="" />
      </div>
    </nuxt-link>
    <div class="p-details">
      <div class="pro-name">
        <h6>
          <nuxt-link :to="'/product/' + product.slug"
            >{{ product.name }}
          </nuxt-link>
        </h6>
      </div>
      <ProductPrice :product="product" />
      <div class="p-ob">
        <b-button
          @click="addToCart(product, true)"
          type="button"
          class="yellow-btn"
          >Buy Now</b-button
        >
        <b-button
          @click="addToCart(product, false)"
          type="button"
          class="blue-btn"
          >Add to cart</b-button
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      default: {},
      type: Object,
    },
  },
  methods:{
    addToCart(product, redirect=true){
      var stock_available_bool = false
      if(product.in_stock==1){
        stock_available_bool=true
        if(product.manage_stock==1){
          stock_available_bool=false
          if(product.stock_qty>0){
            stock_available_bool=true
          }
        }
      }
      if(stock_available_bool===true){
        this.$store.commit('cart/add', {item: product,quantity: 1, redirect: redirect})
      }else{
        this.$store.commit('cart/lowstock', {item: product})
      }
    },
  }
};
</script>