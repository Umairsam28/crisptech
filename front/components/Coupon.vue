<template>
  <div v-if="couponApplied==false" class="coupon">
    <div>
      <b-button v-b-toggle.my-collapse class="blue-btn"
        >Apply Discount Code <font-awesome-icon icon="fa-solid fa-angle-down"
      /></b-button>
    </div>

    <b-collapse id="my-collapse">
      <b-card>
        <b-form>
          <b-form-input
            id="input-1"
            v-model="code"
            type="text"
            placeholder="Enter Discount Code"
          ></b-form-input>
          <b-button v-if="!couponloader" type="button" :disabled="this.code==''" @click="applyCoupon" class="blue-btn">Apply Discount</b-button>
          <b-spinner v-else type="grow" label="Loading..."></b-spinner>
        </b-form>
      </b-card>
    </b-collapse>
  </div>
</template>
<script>
import { mapMutations, mapState, mapActions } from 'vuex'
export default {
    data(){
        return{
            code: '',
        }
    },
    methods:{
      async applyCoupon(){
        if(this.code){
          await this.$store.dispatch('cart/checkCoupon',{
            code: this.code
          })
          this.code = ''
        }
      }
    },
    computed:{
      ...mapState({
        couponApplied: state=>state.cart.couponApplied,
        couponloader: state=>state.cart.couponloader,
      })
    }
}
</script>