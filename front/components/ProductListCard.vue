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
};
</script>