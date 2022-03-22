<template>
  <div class="productdetail">
    <!-- <nuxt-link to="/">Home</nuxt-link> -->
    <div class="bread-crumbs">
      <b-container>
        <b-row>
          <b-breadcrumb :items="items"></b-breadcrumb>
        </b-row>
      </b-container>
    </div>

    <!-- PRODUCT DETAIL -->
    <div class="pro-container">
      <b-container>
        <b-row>
          <b-col md="8" class="product-side">
            <b-row>
              <b-col md="6">
                <div class="img-holder">
                  <img :src="product.detail_image" alt="" />
                </div>
              </b-col>
              <b-col md="6" class="pro-info">
                <div class="pro-name">
                  <h4 class="pro-title">{{product.name}}</h4>
                </div>
                <div class="pro-info">
                  <ul>
                    <li><strong>Part No:</strong> <span>{{product.part_number}}</span></li>
                    <li><strong> Manufacturer:</strong> <span>{{product.brand.name}}</span></li>
                    <li><strong> Category: </strong><span>{{product.category.name}}</span></li>
                    <li>
                      <strong>AVAILABILITY</strong>
                      <span v-if="stock_available" class="i-stock">IN STOCK</span>
                      <span v-else class="o-stock">Out of STOCK</span>
                    </li>
                  </ul>
                </div>
                <div class="pro-price">
                  <strike v-if="product.discount>0">${{product.price}}</strike>
                  <strong>${{product.actual_price}}</strong>
                </div>
                <div v-if="product.discount>0" class="pro-save">
                  You Save: <span>${{product.discount_amount}}</span> ({{product.discount}}% Special Discount)
                </div>
                <div v-if="stock_available" class="quantity">
                  <span>Quantity: </span>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    v-model="quantity"
                    :max="stock_available_max"
                  />
                  <div class="p-ob">
                    <b-button @click="addToCart(true)" class="yellow-btn">Buy Now</b-button>
                    <b-button @click="addToCart(false)" class="blue-btn">Add to cart</b-button>
                  </div>
                </div>
                <div class="payment-logo">
                  <ul>
                    <li>
                      <img src="~/assets/images/amex.svg" alt="payment logo" />
                    </li>
                    <li>
                      <img
                        src="~/assets/images/mastercard.svg"
                        alt="payment logo"
                      />
                    </li>
                    <li>
                      <img src="~/assets/images/visa.svg" alt="payment logo" />
                    </li>
                  </ul>
                </div>
                <div class="three-info">
                  <ul>
                    <li>Free Ground Shipping</li>
                    <li>30-days Returns</li>
                    <li v-if="product.discount>0">{{product.discount}}% Discount</li>
                  </ul>
                </div>
              </b-col>
            </b-row>
          </b-col>
          <b-col md="4" class="right-sidebar">
            <h4 class="side-heading">Request For Quote</h4>
            <div class="req-form">
              <p>
                If you would like a quote on this product please call us at +1
                (832) 344-0072 and one of our representative wil be happy to
                assist you. Please Request a Quote below:
              </p>
              <b-form @submit="submitProductQuote">
                <b-form-group
                  id="input-group-1"
                  label="Email address:"
                  label-for="input-1"
                  description="We'll never share your email with anyone else."
                >
                  <b-form-input
                    id="input-1"
                    type="email"
                    placeholder="Enter email"
                    v-model="quoteform.email"
                    required
                  >
                  </b-form-input>
                  <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback">{{ quoteformerror.email[0] }}</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group
                  id="input-group-2"
                  label="Quantity:"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    type="number"
                    placeholder="quantity"
                    v-model="quoteform.qty"
                    required
                  >
                  </b-form-input>
                  <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback">{{ quoteformerror.qty[0] }}</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group
                  id="textarea"
                  label="Description:"
                  label-for="textarea"
                >
                  <b-form-textarea
                    id="textarea"
                    placeholder="Enter something..."
                    v-model="quoteform.message"
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>
                  <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback">{{ quoteformerror.message[0] }}</b-form-invalid-feedback>
                </b-form-group>

                <b-button v-if="!quoteformloading" :disabled="quoteformloading" type="submit" class="blue-btn">Submit</b-button>
                <b-spinner v-else type="grow" label="Loading..."></b-spinner>
              </b-form>
            </div>
          </b-col>
        </b-row>

        <!-- TABS -->
        <b-row>
          <b-col md="12">
            <div class="pro-tabs">
              <b-tabs content-class="mt-3">
                <b-tab title="Details" active v-html="product.description">
                  <!-- <p>F9K1002TT | Belkin N300 Router</p> -->
                </b-tab>
                <b-tab title="More Information">
                  <p><strong>Manufacturer</strong> : {{product.brand.name}}</p>
                </b-tab>
                <!-- <b-tab title="Reviews"><p>Reviews</p></b-tab> -->
                <b-tab title="Warranty">
                  <div class="in-tab">
                    <p>
                      NextHDD, as stated, is only a retailer, reseller, and
                      distributor, therefore, products sold on the site are not
                      manufactured by NextHDD.
                    </p>

                    <p>
                      The products offered, in certain conditions, may cover
                      warranty or support policy by each manufacturer. We
                      consign and provide our customers with any warranty
                      provided from the manufacturer directly. The customer
                      accepts they shall have options only if the warranty
                      mentioned by the manufacturers covers so for the products.
                    </p>

                    <p>
                      extHDD holds no representation or does not express any
                      warranty with respect to the products, except those
                      clearly stated in the document herein.
                    </p>

                    <p>
                      The company denies any other warranties, implied or
                      expressed, concerning any such product, included but not
                      limited to, the implied warranties of merchantability for
                      any purpose. In case of implied warranties arising from
                      law, trade usage, the course of trading, or performance,
                      the policy stated herein with cover the following in the
                      same manner.
                    </p>

                    <p>
                      You willingly agree to, and understand that our company
                      holds no warranty that our offered service will:
                    </p>
                    <ul>
                      <li>meet your requests, requirements, and expectations fully and finally</li>
                      <li>be consistent, constant, secure, and free of any errors</li>
                      <li>provide exact results or reliable data on information processing</li>
                      <li>correct any error in the software and program</li>
                    </ul>
                    <p>You clearly understand that the information obtained in any form through the use of our service is solely accessed at your personal will and risk. By this means, you are willingly, solely responsible and thereby ignore any or all claims due to any damage to your system, internet access, device, or any loss of data caused by the information downloaded or obtained.</p>
                    <p>You clearly understand that the information obtained in any form through the use of our service is solely accessed at your personal will and risk. By this means, you are willingly, solely responsible and thereby ignore any or all claims due to any damage to your system, internet access, device, or any loss of data caused by the information downloaded or obtained.</p>
                    <p>The company expressly and clearly denies any legal responsibility for any personal damage, injury, or loss of property instigating from the use of products offered on our site. However, included but not limited to, medical treatment, disaster control or prevention, traffic control, or from the use of any related equipment.</p>
                    <p><strong>Condition</strong> : {{product.condition}}</p>
                  </div>
                </b-tab>
              </b-tabs>
            </div>
          </b-col>
        </b-row>
        <!-- END TABS -->
      </b-container>
    </div>
    <!-- PRODUCT DETAIL -->
  </div>
</template>

<script>
import swal from 'sweetalert';
export default {
  async asyncData({ params, $axios }) {
    const {product, parents} = await $axios.$get('products/'+params.slug)
    let items = [{
      text: "Home",
      to: "/",
    }]
    let slug = ''
    for(let  i = 0; i < parents.length; i++){
      slug+="/"+parents[i].slug
      items.push({
        text: parents[i].name,
        to: slug,
      })
    }
    items.push({
      text: product.part_number,
      to: '/products/'+product.slug,
      active: true,
    })
    return {product, items}
  },
  methods:{
    resetError(){
        this.quoteformerror = {
          email:[],
          qty: [],
          message: [],
        }
    },
    async submitProductQuote(event){
      this.resetError()
      if(!this.quoteformloading){
        this.quoteformloading=true
        event.preventDefault()
        let quoteformdata = {}
        Object.assign(quoteformdata,this.quoteform)
        quoteformdata.product_id = this.product.id
        let res = await this.$axios.post('products/quote',quoteformdata).then(function(e){
            return {status: 1, data: e.data.data}
        }).catch(function(e){
            return {status: 0, data: e.response.data.errors};
        })
        if(!res.status){
          if(res.data.email){
              this.quoteformerror.email = res.data.email
          }
          if(res.data.qty){
              this.quoteformerror.qty = res.data.qty
          }
          if(res.data.message){
              this.quoteformerror.message = res.data.message
          }
        }else{
          this.quoteform = {
            email: '',
            qty: 1,
            message: '',
          }
          swal("Thank you", "Your Inquiry has been submitted", "success");
        }
        this.quoteformloading=false
      }
    },
    addToCart(redirect=true){
      if(this.stock_available===true){
        this.$store.commit('cart/add', {item: this.product,quantity: this.quantity, redirect: redirect})
      }
    }
  },
  computed:{
    stock_available(){
      var stock_available_bool = false
      if(this.product.in_stock==1){
        stock_available_bool=true
        if(this.product.manage_stock==1){
          stock_available_bool=false
          if(this.product.stock_qty>0){
            stock_available_bool=true
          }
        }
      }
      return stock_available_bool
    },
    stock_available_max(){
      var max = 100
      if(this.product.manage_stock==1){
        max = this.product.stock_qty
      }
      return max
    }
  },
  data() {
    return {
      quantity: 1,
      quoteformloading: false,
      quoteform:{
        email: '',
        qty: 1,
        message: '',
      },
      quoteformerror:{
        email:[],
        qty: [],
        message: [],
      },
    };
  },
  watch:{
    quantity(){
      if(this.quantity>this.stock_available_max){
        this.quantity = this.stock_available_max
      }
    }
  }
};
</script>