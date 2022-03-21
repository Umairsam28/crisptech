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
                    label="Country:"
                    label-for="input-1"
                  >
                    <b-form-select
                      @input="shipping_country"
                      :options="shipping_countries"
                      value-field="id"
                      text-field="name"
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
                      :options="shipping_states"
                      value-field="id"
                      text-field="name"
                    ></b-form-select>
                    <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback" v-if="shipping_state_err.length>0">{{ shipping_state_err[0] }}</b-form-invalid-feedback>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="City:"
                    label-for="input-1"
                  >
                    <b-form-select
                      @input="shipping_city"
                      :options="shipping_cities"
                      value-field="id"
                      text-field="name"
                    ></b-form-select>
                    <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback" v-if="shipping_city_err.length>0">{{ shipping_city_err[0] }}</b-form-invalid-feedback>
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

                  <b-form-group
                    id="input-group-1"
                    label-for="input-sameasshipping"
                  >
                    <b-form-checkbox
                    id="input-sameasshipping"
                    v-model="same_as_shipping"
                  >Same as Shipping
                    
                  </b-form-checkbox>
                  </b-form-group>
                </b-form>
              </div>

              <div v-if="!same_as_shipping" class="block-box">
                <h5>Billing Address</h5>
                <b-form>
                  <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      @input="billing_email"
                      :value="billing_email_comp"
                      type="email"
                      placeholder="Enter email"
                      required
                    >
                    </b-form-input>
                    <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback" v-if="billing_email_err.length>0">{{ billing_email_err[0] }}</b-form-invalid-feedback>
                  </b-form-group>
                  <b-form-group
                    id="input-group-1"
                    label="First Name:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      @input="billing_first_name"
                      :value="billing_first_name_comp"
                      type="text"
                      placeholder="First Name"
                      required
                    >
                    </b-form-input>
                    <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback" v-if="billing_first_name_err.length>0">{{ billing_first_name_err[0] }}</b-form-invalid-feedback>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="Last Name:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      @input="billing_last_name"
                      :value="billing_last_name_comp"
                      type="text"
                      placeholder="Last Name"
                      required
                    >
                    </b-form-input>
                    <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback" v-if="billing_last_name_err.length>0">{{ billing_last_name_err[0] }}</b-form-invalid-feedback>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="Company"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      @input="billing_company"
                      :value="billing_company_comp"
                      type="text"
                      placeholder="Company"
                      required
                    >
                    </b-form-input>
                    <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback" v-if="billing_company_err.length>0">{{ billing_company_err[0] }}</b-form-invalid-feedback>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="Street Address:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      @input="billing_address"
                      :value="billing_address_comp"
                      type="text"
                      placeholder="Address"
                      required
                    >
                    </b-form-input>
                    <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback" v-if="billing_address_err.length>0">{{ billing_address_err[0] }}</b-form-invalid-feedback>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="Country:"
                    label-for="input-1"
                  >
                    <b-form-select
                      @input="billing_country"
                      :options="billing_countries"
                      value-field="id"
                      text-field="name"
                    ></b-form-select>
                    <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback" v-if="billing_country_err.length>0">{{ billing_country_err[0] }}</b-form-invalid-feedback>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="State/Province:"
                    label-for="input-1"
                  >
                    <b-form-select
                      @input="billing_state"
                      :options="billing_states"
                      value-field="id"
                      text-field="name"
                    ></b-form-select>
                    <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback" v-if="billing_state_err.length>0">{{ billing_state_err[0] }}</b-form-invalid-feedback>
                  </b-form-group>


                  <b-form-group
                    id="input-group-1"
                    label="City:"
                    label-for="input-1"
                  >
                    <b-form-select
                      @input="billing_city"
                      :options="billing_cities"
                      value-field="id"
                      text-field="name"
                    ></b-form-select>
                    <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback" v-if="billing_city_err.length>0">{{ billing_city_err[0] }}</b-form-invalid-feedback>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="ZIP:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      @input="billing_zipcode"
                      :value="billing_zipcode_comp"
                      type="text"
                      required
                    >
                    </b-form-input>
                    <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback" v-if="billing_zipcode_err.length>0">{{ billing_zipcode_err[0] }}</b-form-invalid-feedback>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="Phone:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      @input="billing_phone"
                      :value="billing_phone_comp"
                      type="text"
                      required
                    >
                    </b-form-input>
                    <b-form-invalid-feedback v-if="billing_phone_err.length>0" :force-show="true" id="input-1-live-feedback">{{ billing_phone_err[0] }}</b-form-invalid-feedback>
                  </b-form-group>
                </b-form>
              </div>
            </b-col>
            <!-- COL 1 -->

            <!-- COL 2 -->
            <b-col md="4">
              <!-- <div class="block-box">
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
              </div> -->

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
                        type="text"
                        placeholder="Card Number"
                        required
                        v-model="card.number"
                      >
                      </b-form-input>
                      <b-form-invalid-feedback v-if="card_number_err.length>0" :force-show="true" id="input-1-live-feedback">{{ card_number_err[0] }}</b-form-invalid-feedback>
                    </li>
                    <li class="cmonth">
                      <font-awesome-icon icon="fa-solid fa-calendar-days" />
                      <b-form-select text-field="value" value-field="id" required v-model="card.month" :options="[{'id':1, value: 'January'},{'id':2, value: 'February'},{'id':3, value: 'March'},{'id':4, value: 'April'},{'id':5, value: 'May'},{'id':6, value: 'June'},{'id':7, value: 'July'},{'id':8, value: 'August'},{'id':9, value: 'September'},{'id':10, value: 'Octuber'},{'id':11, value: 'November'},{'id':12, value: 'December'}]"></b-form-select>
                      <b-form-invalid-feedback v-if="card_month_err.length>0" :force-show="true" id="input-1-live-feedback">{{ card_month_err[0] }}</b-form-invalid-feedback>
                      <b-form-select text-field="value" value-field="id" required v-model="card.year" :options="card_years"></b-form-select>
                      <b-form-invalid-feedback v-if="card_year_err.length>0" :force-show="true" id="input-1-live-feedback">{{ card_year_err[0] }}</b-form-invalid-feedback>
                    </li>
                    <li class="cnum">
                      <font-awesome-icon icon="fa-solid fa-credit-card" />
                      <b-form-input
                        id="input-1"
                        type="text"
                        placeholder="CVV Number"
                        required
                        v-model="card.cvv"
                      >
                      </b-form-input>
                      <b-form-invalid-feedback v-if="card_cvv_err.length>0" :force-show="true" id="input-1-live-feedback">{{ card_cvv_err[0] }}</b-form-invalid-feedback>
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
                      <li><span>Tax</span><span>${{tax_amount.toFixed(2)}} </span></li>
                      <!-- <li>
                        <span>Free Ground Shipping - Free </span><span></span>
                      </li> -->
                    </ul>
                    <ul class="total-order">
                      <li><span>Order Total	</span><span>${{final_total}}</span></li>
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
  mounted(){
    this.$axios.get('countries').then(e=>{
      this.shipping_countries = e.data.countries
      this.billing_countries = e.data.countries
    })
    for(let i = 2022; i < 2032;i++){
      this.card_years.push({id: i, value: i})
    }
  },
  data() {
    return {
      same_as_shipping: true,
      shipping_countries: [],
      shipping_states: [],
      shipping_cities: [],
      billing_countries: [],
      billing_states: [],
      billing_cities: [],
      card:{
        number: '',
        month: '',
        year: '',
        cvv: '',
      },
      card_years: [],
      taxcalls: undefined,
      tax_percent: 0,
    };
  },
  watch:{
    same_as_shipping(){
      if(this.same_as_shipping===true){
        this.billing_states = this.shipping_states
        this.billing_cities = this.shipping_cities
        this.billing_email(this.shipping_email_comp)
        this.billing_first_name(this.shipping_first_name_comp)
        this.billing_last_name(this.shipping_last_name_comp)
        this.billing_address(this.shipping_address_comp)
        this.billing_city(this.shipping_city_comp)
        this.billing_zipcode(this.shipping_zip_comp)
        this.billing_phone(this.shipping_phone_comp)
        this.billing_company(this.shipping_company_comp)
        this.billing_city(this.shipping_city_comp)
        this.billing_country(this.shipping_country_comp)
        this.billing_state(this.shipping_state_comp)
      }else{
        this.billing_states = []
        this.billing_cities = []
        this.billing_email('')
        this.billing_first_name('')
        this.billing_last_name('')
        this.billing_address('')
        this.billing_city('')
        this.billing_zipcode('')
        this.billing_phone('')
        this.billing_company('')
        this.billing_city('')
        this.billing_country('')
        this.billing_state('')
      }
    },
    shipping_email_comp(){
      if(this.same_as_shipping===true){
        this.billing_email(this.shipping_email_comp)
      }
    },
    shipping_first_name_comp(){
      if(this.same_as_shipping===true){
        this.billing_first_name(this.shipping_first_name_comp)
      }
    },
    shipping_last_name_comp(){
      if(this.same_as_shipping===true){
        this.billing_last_name(this.shipping_last_name_comp)
      }
    },
    shipping_address_comp(){
      if(this.same_as_shipping===true){
        this.billing_address(this.shipping_address_comp)
      }
    },
    shipping_city_comp(){
      if(this.same_as_shipping===true){
        this.billing_city(this.shipping_city_comp)
      }
    },
    shipping_zip_comp(){
      if(this.same_as_shipping===true){
        this.billing_zipcode(this.shipping_zip_comp)
      }
    },
    shipping_phone_comp(){
      if(this.same_as_shipping===true){
        this.billing_phone(this.shipping_phone_comp)
      }
    },
    shipping_company_comp(){
      if(this.same_as_shipping===true){
        this.billing_company(this.shipping_company_comp)
      }
    },
    shipping_city_comp(){
      if(this.same_as_shipping===true){
        this.billing_city(this.shipping_city_comp)
      }
    },
    async shipping_country_comp(){
      if(this.shipping_country_comp){
        await this.$axios.get('states/'+this.shipping_country_comp).then(e=>{
          this.shipping_states = e.data.states
          if(this.same_as_shipping===true){
            this.billing_states = e.data.states
          }
        })
      }
      if(this.same_as_shipping===true){
        this.billing_country(this.shipping_country_comp)
      }
    },
    async shipping_state_comp(){
      if(this.shipping_state_comp){
        await this.$axios.get('cities/'+this.shipping_state_comp).then(e=>{
          this.shipping_cities = e.data.cities
          if(this.same_as_shipping===true){
            this.billing_cities = e.data.cities
          }
        })
      }
      if(this.same_as_shipping===true){
        this.billing_state(this.shipping_state_comp)
      }
    },
    async billing_country_comp(){
      if(this.same_as_shipping===false){
        if(this.billing_country_comp){
          await this.$axios.get('states/'+this.billing_country_comp).then(e=>{
            this.billing_states = e.data.states
          })
        }
      }
    },
    async billing_state_comp(){
      this.checkfortax()
      if(this.same_as_shipping===false){
        if(this.billing_state_comp){
          await this.$axios.get('cities/'+this.billing_state_comp).then(e=>{
            this.billing_cities = e.data.cities
          })
        }
      }
    },
    async billing_email_comp(){
      this.checkfortax()
    },
  },
  computed:{
    ...mapState({
      shipping_email_comp: state=>state.checkout.form.shipping_email,
      shipping_notes_comp: state=>state.checkout.form.shipping_notes,
      shipping_first_name_comp: state=>state.checkout.form.shipping_first_name,
      shipping_last_name_comp: state=>state.checkout.form.shipping_last_name,
      shipping_address_comp: state=>state.checkout.form.shipping_address,
      shipping_city_comp: state=>state.checkout.form.shipping_city,
      shipping_zip_comp: state=>state.checkout.form.shipping_zip,
      shipping_phone_comp: state=>state.checkout.form.shipping_phone,
      shipping_company_comp: state=>state.checkout.form.shipping_company,
      shipping_city_comp: state=>state.checkout.form.shipping_city,
      shipping_country_comp: state=>state.checkout.form.shipping_country,
      shipping_state_comp: state=>state.checkout.form.shipping_state,

      billing_email_comp: state=>state.checkout.form.billing_email,
      billing_first_name_comp: state=>state.checkout.form.billing_first_name,
      billing_last_name_comp: state=>state.checkout.form.billing_last_name,
      billing_address_comp: state=>state.checkout.form.billing_address,
      billing_city_comp: state=>state.checkout.form.billing_city,
      billing_zipcode_comp: state=>state.checkout.form.billing_zipcode,
      billing_phone_comp: state=>state.checkout.form.billing_phone,
      billing_company_comp: state=>state.checkout.form.billing_company,
      billing_city_comp: state=>state.checkout.form.billing_city,
      billing_country_comp: state=>state.checkout.form.billing_country,
      billing_state_comp: state=>state.checkout.form.billing_state,

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

      billing_email_err: state=>state.checkout.errors.billing_email,
      billing_first_name_err: state=>state.checkout.errors.billing_first_name,
      billing_last_name_err: state=>state.checkout.errors.billing_last_name,
      billing_address_err: state=>state.checkout.errors.billing_address,
      billing_city_err: state=>state.checkout.errors.billing_city,
      billing_zipcode_err: state=>state.checkout.errors.billing_zipcode,
      billing_phone_err: state=>state.checkout.errors.billing_phone,
      billing_company_err: state=>state.checkout.errors.billing_company,
      billing_country_err: state=>state.checkout.errors.billing_country,
      billing_state_err: state=>state.checkout.errors.billing_state,

      card_number_err: state=>state.checkout.errors.card_number,
      card_month_err: state=>state.checkout.errors.card_month,
      card_cvv_err: state=>state.checkout.errors.card_cvv,
      card_year_err: state=>state.checkout.errors.card_year,

      formloading: state=>state.checkout.formloading,
      items: state=>state.cart.items,
      total: state=>state.cart.total,
      subtotal: state=>state.cart.subtotal,
      discount_amount: state=>state.cart.discount_amount,
      discount_applied: state=>state.cart.couponApplied,
      // same_as_billing_comp: 'checkout/same_as_billing',
    }),
    tax_amount(){
      let tax_amount = parseFloat((this.total/100)*this.tax_percent)
      return tax_amount;
    },
    final_total(){
      let tax_amount = this.tax_amount
      return parseFloat(parseFloat(this.total)+tax_amount).toFixed(2)
    }
  },
  methods: {
    ...mapMutations({
      shipping_email: 'checkout/set_shipping_email',
      shipping_notes: 'checkout/set_shipping_notes',
      shipping_first_name: 'checkout/set_shipping_first_name',
      shipping_last_name: 'checkout/set_shipping_last_name',
      shipping_address: 'checkout/set_shipping_address',
      shipping_city: 'checkout/set_shipping_city',
      shipping_zip: 'checkout/set_shipping_zip',
      shipping_phone: 'checkout/set_shipping_phone',
      shipping_company: 'checkout/set_shipping_company',
      shipping_city: 'checkout/set_shipping_city',
      shipping_country: 'checkout/set_shipping_country',
      shipping_state: 'checkout/set_shipping_state',

      billing_email: 'checkout/set_billing_email',
      billing_first_name: 'checkout/set_billing_first_name',
      billing_last_name: 'checkout/set_billing_last_name',
      billing_address: 'checkout/set_billing_address',
      billing_city: 'checkout/set_billing_city',
      billing_zipcode: 'checkout/set_billing_zipcode',
      billing_phone: 'checkout/set_billing_phone',
      billing_company: 'checkout/set_billing_company',
      billing_city: 'checkout/set_billing_city',
      billing_country: 'checkout/set_billing_country',
      billing_state: 'checkout/set_billing_state',
    }),
    saveOrder(){
      this.$store.dispatch('checkout/save',{
        items: this.items,
        card: this.card,
        discount_applied: this.discount_applied,
        discount_amount: this.discount_amount,
        tax_amount: this.tax_amount,
        tax_percent: this.tax_percent,
      })
    },
    checkfortax(){
      this.tax_percent = 0
      if(parseInt(this.billing_state_comp)>0){
        clearInterval(this.taxcalls);
        this.taxcalls = setInterval(()=>{
          clearInterval(this.taxcalls);
          this.$axios.get('user-exemptions?user_email='+this.billing_email_comp+'&state_id='+this.billing_state_comp).then(e=>{
            if(e.data.data.length==0){
              this.$axios.get('states-single/'+this.billing_state_comp).then(e=>{
                this.tax_percent = e.data.state.tax_percent
              })
            }
          })
        },500)
      }
    },
  }
};
</script>