<template>
    <div class="price_container">
        <span v-if="product.price>product.sale_price" class="old-price">${{product.price}}</span>
        <span class="new_price">${{product.sale_price}}</span>
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