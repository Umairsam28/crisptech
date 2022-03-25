<template>
    <div class="price_container">
        <span v-if="product.price>product.sale_price" class="old-price">${{parseFloat(product.price).toFixed(2)}}</span>
        <span class="new_price">${{parseFloat(product.sale_price).toFixed(2)}}</span>
    </div>
</template>
<script>
export default {
    props:{
        product: {
            default: {},
            type: Object,
        }
    }
}
</script>