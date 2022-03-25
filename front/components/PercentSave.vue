<template>
    <div v-if="product.sale_price<product.price" class="save_per">Save {{(100-((product.sale_price/product.price)*100)).toFixed(2)}}%</div>
</template>
<script>
export default {
    props:{
        product:{
            type: Object,
            default: {},
        }
    }
}
</script>