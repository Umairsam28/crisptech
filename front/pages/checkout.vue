<template>
  <div class="checkout-sec">
    <!-- <nuxt-link to="/">Home</nuxt-link> -->
    <div class="user-form">
      <b-container>
        <h2 class="sec-heading">Checkout</h2>
        <!-- <nuxt-link to="/products"></nuxt-link> -->
        <div class="checkout-view">
          <b-row class="top-ob">
            <b-col sm="6">
              <p>
                Please enter your details below to complete your purchase
              </p>
              </b-col>
              <b-col sm="6">
              <p>
                <nuxt-link to="/login" class="blue-btn btn-style">Sign In</nuxt-link>
              </p>
              </b-col>
            <!-- COL 1 -->
            <b-col md="4">
              <div class="block-box">
                <h5>Shipping Address</h5>
                <b-form>
                  <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
                    description="You can create an account after checkout."
                  >
                    <b-form-input
                      id="input-1"
                      @input="shipping_email"
                      :value="shipping_email_comp"
                      type="email"
                      placeholder="Enter email"
                      required
                    >
                    </b-form-input>
                    <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback" v-if="shipping_email_err.length>0">{{ shipping_email_err[0] }}</b-form-invalid-feedback>
                  </b-form-group>
                  <hr />
                  <b-form-group
                    id="input-group-1"
                    label="First Name:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      @input="shipping_first_name"
                      :value="shipping_first_name_comp"
                      type="text"
                      placeholder="First Name"
                      required
                    >
                    </b-form-input>
                    <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback" v-if="shipping_first_name_err.length>0">{{ shipping_first_name_err[0] }}</b-form-invalid-feedback>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="Last Name:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      @input="shipping_last_name"
                      :value="shipping_last_name_comp"
                      type="text"
                      placeholder="Last Name"
                      required
                    >
                    </b-form-input>
                    <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback" v-if="shipping_last_name_err.length>0">{{ shipping_last_name_err[0] }}</b-form-invalid-feedback>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="Company"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      @input="shipping_company"
                      :value="shipping_company_comp"
                      type="text"
                      placeholder="Company"
                      required
                    >
                    </b-form-input>
                    <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback" v-if="shipping_company_err.length>0">{{ shipping_company_err[0] }}</b-form-invalid-feedback>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="Street Address:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      @input="shipping_address"
                      :value="shipping_address_comp"
                      type="text"
                      placeholder="Address"
                      required
                    >
                    </b-form-input>
                    <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback" v-if="shipping_address_err.length>0">{{ shipping_address_err[0] }}</b-form-invalid-feedback>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="City:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      @input="shipping_city"
                      :value="shipping_city_comp"
                      type="text"
                      placeholder="City"
                      required
                    >
                    </b-form-input>
                    <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback" v-if="shipping_city_err.length>0">{{ shipping_city_err[0] }}</b-form-invalid-feedback>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="Country:"
                    label-for="input-1"
                  >
                    <b-form-select
                      @input="shipping_country"
                      :options="options"
                    ></b-form-select>
                    <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback" v-if="shipping_country_err.length>0">{{ shipping_country_err[0] }}</b-form-invalid-feedback>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="State/Province:"
                    label-for="input-1"
                  >
                    <b-form-select
                      @input="shipping_state"
                      :options="options2"
                    ></b-form-select>
                    <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback" v-if="shipping_state_err.length>0">{{ shipping_state_err[0] }}</b-form-invalid-feedback>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="ZIP:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      @input="shipping_zip"
                      :value="shipping_zip_comp"
                      type="text"
                      required
                    >
                    </b-form-input>
                    <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback" v-if="shipping_zip_err.length>0">{{ shipping_zip_err[0] }}</b-form-invalid-feedback>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="Phone:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      @input="shipping_phone"
                      :value="shipping_phone_comp"
                      type="text"
                      required
                    >
                    </b-form-input>
                    <b-form-invalid-feedback v-if="shipping_phone_err.length>0" :force-show="true" id="input-1-live-feedback">{{ shipping_phone_err[0] }}</b-form-invalid-feedback>
                  </b-form-group>
                </b-form>
              </div>
            </b-col>
            <!-- COL 1 -->

            <!-- COL 2 -->
            <b-col md="4">
              <div class="block-box">
                <h5>Shipping Method</h5>
                <div class="table-responsive">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <b-form-radio
                            name="some-radios"
                            value="A"
                          ></b-form-radio>
                        </td>
                        <td>Free</td>
                        <td>Free Ground Shipping</td>
                      </tr>
                      <tr>
                        <td>
                          <b-form-radio
                            name="some-radios"
                            value="B"
                          ></b-form-radio>
                        </td>
                        <td>USPS</td>
                        <td>Free Ground Shipping</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="block-box">
                <h5>Payment Method</h5>
                <div class="payments">
                  <p>Pay by Card (Stripe)</p>
                  <ul>
                    <li><img src="~/assets/images/amex.svg" alt="" /></li>
                    <li><img src="~/assets/images/mastercard.svg" alt="" /></li>
                    <li><img src="~/assets/images/visa.svg" alt="" /></li>
                    <li><img src="~/assets/images/jcb.svg" alt="" /></li>
                    <li><img src="~/assets/images/discover.svg" alt="" /></li>
                    <li><img src="~/assets/images/diners.svg" alt="" /></li>
                  </ul>
                </div>
                <div class="pcard-info">
                  <p>Enter your card details:</p>
                  <ul>
                    <li class="cnum">
                      <font-awesome-icon icon="fa-solid fa-credit-card" />
                      <b-form-input
                        id="input-1"
                        type="email"
                        placeholder="Enter email"
                        required
                      >
                      </b-form-input>
                    </li>
                    <li class="cmonth">
                      <font-awesome-icon icon="fa-solid fa-calendar-days" />
                      <b-form-input
                        id="input-1"
                        type="email"
                        placeholder="Enter email"
                        required
                      >
                      </b-form-input>
                      <b-form-input
                        id="input-1"
                        type="email"
                        placeholder="Enter email"
                        required
                      >
                      </b-form-input>
                    </li>
                  </ul>
                  <ul>
                    <li><font-awesome-icon icon="fa-solid fa-lock" /></li>
                    <li>
                      Your card details are protected using PCI DSS v3.2
                      security standards.
                    </li>
                  </ul>
                  <b-button v-show="items.length>0" v-if="!formloading" :disabled="formloading" type="button" @click="saveOrder" class="blue-btn">Place Order</b-button>
                  <b-spinner v-else type="grow" label="Loading..."></b-spinner>
                </div>
              </div>
            </b-col>
            <!-- COL 2 -->

            <!-- COL 3 -->
            <b-col md="4">
              <div class="block-box">
                <h5>Order Summary</h5>
                <div class="cart-info">
                  <div class="cart-items">
                    <b-col md="12 items-count">
                      <p>{{items.length}} items in cart</p>
                    </b-col>
                    <b-row v-for="(cartItem, cartItemKey) in items" :key="cartItemKey">
                      <b-col md="4">
                        <div class="img-holder">
                          <img
                            :src="cartItem.product.home_image"
                          />
                        </div>
                      </b-col>
                      <b-col md="8">
                        <div class="pro-info">
                          <div class="cp-name">
                            {{cartItem.product.part_number}}
                          </div>
                          <div class="cp-price">${{cartItem.product.actual_price*cartItem.quantity}}</div>
                          <div class="cp-quantity">
                            <span>Qty: {{cartItem.quantity}}</span>
                          </div>
                        </div>
                      </b-col>
                    </b-row>
                  </div>
                  <div class="f-total">
                    <ul class="order-top">
                      <li><span>Cart Subtotal </span><span>${{subtotal}} </span></li>
                      <li><span>Discount</span><span>${{discount_amount}} </span></li>
                      <li><span>Shipping</span><span>$0.00 </span></li>
                      <li>
                        <span>Free Ground Shipping - Free </span><span></span>
                      </li>
                    </ul>
                    <ul class="total-order">
                      <li><span>Order Total	</span><span>${{total}}</span></li>
                    </ul>
                  </div>
                  <Coupon />
                </div>
              </div>
            </b-col>
            <!-- COL 3 -->
          </b-row>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      form: {},
      show: true,

      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "Albania	" },
        { value: "b", text: "Algeria" },
        { value: "c", text: "Andorra" },
      ],
      options2: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
      ],
    };
  },
  computed:{
    ...mapState({
      shipping_email_comp: state=>state.checkout.form.shipping_email,
      shipping_notes_comp: state=>state.checkout.form.shipping_notes,
      shipping_first_name_comp: state=>state.checkout.form.shipping_first_name,
      shipping_last_name_comp: state=>state.checkout.form.shipping_last_name,
      shipping_address_comp: state=>state.checkout.form.shipping_address,
      shipping_address_2_comp: state=>state.checkout.form.shipping_address_2,
      shipping_city_comp: state=>state.checkout.form.shipping_city,
      shipping_zip_comp: state=>state.checkout.form.shipping_zip,
      shipping_phone_comp: state=>state.checkout.form.shipping_phone,
      shipping_company_comp: state=>state.checkout.form.shipping_company,
      shipping_city_comp: state=>state.checkout.form.shipping_city,
      shipping_country_comp: state=>state.checkout.form.shipping_country,
      shipping_state_comp: state=>state.checkout.form.shipping_state,

      //binding errors 
      shipping_email_err: state=>state.checkout.errors.shipping_email,
      shipping_notes_err: state=>state.checkout.errors.shipping_notes,
      shipping_first_name_err: state=>state.checkout.errors.shipping_first_name,
      shipping_last_name_err: state=>state.checkout.errors.shipping_last_name,
      shipping_address_err: state=>state.checkout.errors.shipping_address,
      shipping_city_err: state=>state.checkout.errors.shipping_city,
      shipping_zip_err: state=>state.checkout.errors.shipping_zip,
      shipping_phone_err: state=>state.checkout.errors.shipping_phone,
      shipping_company_err: state=>state.checkout.errors.shipping_company,
      shipping_country_err: state=>state.checkout.errors.shipping_country,
      shipping_state_err: state=>state.checkout.errors.shipping_state,
      formloading: state=>state.checkout.formloading,
      items: state=>state.cart.items,
      total: state=>state.cart.total,
      subtotal: state=>state.cart.subtotal,
      discount_amount: state=>state.cart.discount_amount,
      discount_applied: state=>state.cart.couponApplied,
      // same_as_billing_comp: 'checkout/same_as_billing',
    }),
  },
  methods: {
    ...mapMutations({
      shipping_email: 'checkout/set_shipping_email',
      shipping_notes: 'checkout/set_shipping_notes',
      shipping_first_name: 'checkout/set_shipping_first_name',
      shipping_last_name: 'checkout/set_shipping_last_name',
      shipping_address: 'checkout/set_shipping_address',
      shipping_address_2: 'checkout/set_shipping_address_2',
      shipping_city: 'checkout/set_shipping_city',
      shipping_zip: 'checkout/set_shipping_zip',
      shipping_phone: 'checkout/set_shipping_phone',
      shipping_company: 'checkout/set_shipping_company',
      shipping_city: 'checkout/set_shipping_city',
      shipping_country: 'checkout/set_shipping_country',
      shipping_state: 'checkout/set_shipping_state',
    }),
    saveOrder(){
      this.$store.dispatch('checkout/save',{
        items: this.items
      })
    },
  }
};
</script>