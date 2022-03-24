<template>
  <div class="cart-sec">
    <!-- <nuxt-link to="/">Home</nuxt-link> -->
    <div class="user-form">
      <b-container>
        <h2 class="sec-heading">SHOPPING CART</h2>
        <!-- <nuxt-link to="/products"></nuxt-link> -->
        <div class="cart-view">
          <b-row>
            <!-- CART AREA -->
            <b-col md="9">
              <div class="cart-area">
                <div class="table-responsive table-striped">
                  <table>
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(cartItem, cartItemKey) in cartItems" :key="cartItemKey">
                        <td>
                          <img :src="cartItem.product.home_image" alt="" />
                          {{cartItem.product.part_number}}
                        </td>
                        <td class="price">${{parseFloat(cartItem.product.actual_price).toFixed(2)}}</td>
                        <td>
                          <b-form-input
                            id="input-1"
                            type="text"
                            :value="cartItem.quantity"
                            @keyup="updateCart({$event,cartItemKey})"
                          ></b-form-input>
                        </td>
                        <td class="price">${{parseFloat(cartItem.product.actual_price*cartItem.quantity).toFixed(2)}}</td>
                        <td>
                          <b-button variant="link" size="sm" @click="removeItem(cartItemIndex)">
                            <i aria-hidden="true" class="fa fa-trash"></i>
                          </b-button>
                          <b-button variant="link" size="sm" :to="'/product/'+cartItem.product.slug">
                            <i aria-hidden="true" class="fa fa-pencil"></i>
                          </b-button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- <b-button class="blue-btn">Update Shoppuing Cart</b-button> -->
                </div>
                <Coupon />
              </div>
            </b-col>
            <!-- END CART AREA -->

            <!-- SUMMARY -->
            <b-col md="3">
              <div class="summary">
                <h6>Summary</h6>
                <div class="mix-total">
                  <ul>
                    <li><span>Subtotal</span><span>${{parseFloat(cartSubTotal).toFixed(2)}}</span></li>
                    <li><span>Discount</span><span>${{parseFloat(cartDiscountAmount).toFixed(2)}}</span></li>
                    <!-- <li><span>Tax</span><span>$0.00</span></li> -->
                  </ul>
                </div>
                <div class="sum-total">
                  <ul>
                    <li>Order Total</li>
                    <li>${{parseFloat(cartTotal).toFixed(2)}}</li>
                  </ul>
                </div>
                <div class="sum-btns">
                  <nuxt-link to="/checkout" class="blue-btn btn-style"
                    >Proceed to Checkout</nuxt-link
                  >
                  <!-- <nuxt-link to="/checkout" class="yellow-btn btn-style"
                    >Pay Now</nuxt-link
                  >
                  <nuxt-link to="/"
                    >Check Out with Multiple Addresses</nuxt-link
                  > -->
                </div>
              </div>
            </b-col>
            <!-- END SUMMARY -->
          </b-row>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      show: true,
      qty: '',
    };
  },
  methods: {
    removeItem(index){
      this.$store.commit('cart/remove',{
        index: index,
      })
    },
    updateCart(e){
      let qty = e.$event.target.value;
      let index = e.cartItemKey;
      if(qty > 0){
            this.$store.commit('cart/qtyChange',{type:null,index:index,quantity: qty})
      }
    }
  },
  computed:{
    cartTotal(){
      return this.$store.state.cart.total
    },
    cartItems(){
      return this.$store.state.cart.items
    },
    cartSubTotal(){
      return this.$store.state.cart.subtotal
    },
    cartDiscountAmount(){
      return this.$store.state.cart.discount_amount
    },
    cartCouponApplied(){
      return this.$store.state.cart.couponApplied
    }
  }
};
</script>