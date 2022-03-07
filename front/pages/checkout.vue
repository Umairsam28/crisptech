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
                      v-model="form.text"
                      type="email"
                      placeholder="Enter email"
                      required
                    >
                    </b-form-input>
                  </b-form-group>

                  <hr />

                  <b-form-group
                    id="input-group-1"
                    label="First Name:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="form.text"
                      type="text"
                      placeholder="First Name"
                      required
                    >
                    </b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="Last Name:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="form.text"
                      type="text"
                      placeholder="Last Name"
                      required
                    >
                    </b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="Company"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="form.text"
                      type="text"
                      placeholder="Company"
                      required
                    >
                    </b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="Street Address:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="form.text"
                      type="text"
                      placeholder="Address"
                      required
                    >
                    </b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="City:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="form.text"
                      type="text"
                      placeholder="City"
                      required
                    >
                    </b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="Country:"
                    label-for="input-1"
                    description="You can create an account after checkout."
                  >
                    <b-form-select
                      v-model="selected"
                      :options="options"
                    ></b-form-select>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="State/Province:"
                    label-for="input-1"
                    description="You can create an account after checkout."
                  >
                    <b-form-select
                      v-model="selected"
                      :options="options2"
                    ></b-form-select>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="ZIP:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="form.text"
                      type="text"
                      required
                    >
                    </b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="Phone:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="form.text"
                      type="text"
                      required
                    >
                    </b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="GST:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="form.text"
                      type="text"
                      required
                    >
                    </b-form-input>
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
                            v-model="selected"
                            :aria-describedby="ariaDescribedby"
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
                            v-model="selected"
                            :aria-describedby="ariaDescribedby"
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
                        v-model="form.text"
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
                        v-model="form.text"
                        type="email"
                        placeholder="Enter email"
                        required
                      >
                      </b-form-input>
                      <b-form-input
                        id="input-1"
                        v-model="form.text"
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
                  <b-button class="blue-btn">Place Order</b-button>
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
                      <p>2 items in cart</p>
                    </b-col>
                    <b-row>
                      <b-col md="4">
                        <div class="img-holder">
                          <img
                            src="~/assets/images/card-img1.png"
                            alt="nextHDD-logo"
                          />
                        </div>
                      </b-col>
                      <b-col md="8">
                        <div class="pro-info">
                          <div class="cp-name">
                            390-0488-02 | Sun 600GB 10000RPM SAS Gbps 2.5 64MB
                            Cache Hard Drive
                          </div>
                          <div class="cp-price">$377.57</div>
                          <div class="cp-quantity">
                            <span>Qty: 01</span>
                          </div>
                        </div>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col md="4">
                        <div class="img-holder">
                          <img
                            src="~/assets/images/card-img1.png"
                            alt="nextHDD-logo"
                          />
                        </div>
                      </b-col>
                      <b-col md="8">
                        <div class="pro-info">
                          <div class="cp-name">
                            390-0488-02 | Sun 600GB 10000RPM SAS Gbps 2.5 64MB
                            Cache Hard Drive
                          </div>
                          <div class="cp-price">$377.57</div>
                          <div class="cp-quantity">
                            <span>Qty: 01</span>
                          </div>
                        </div>
                      </b-col>
                    </b-row>
                  </div>
                  <div class="f-total">
                    <ul class="order-top">
                      <li><span>Cart Subtotal </span><span>$280.74 </span></li>
                      <li><span>Shipping</span><span>$0.00 </span></li>
                      <li>
                        <span>Free Ground Shipping - Free </span><span></span>
                      </li>
                    </ul>
                    <ul class="total-order">
                      <li><span>Order Total	</span><span>$280.74</span></li>
                    </ul>
                  </div>
                  <div class="coupon">
                  <div>
                    <b-button v-b-toggle.my-collapse class="blue-btn">Apply Discount Code <font-awesome-icon icon="fa-solid fa-angle-down" /></b-button>
                  </div>

                  <b-collapse id="my-collapse">
                    <b-card>
                        <b-form>
                          <b-form-input
                              id="input-1"
                              v-model="form.coupon"
                              type="text"
                              placeholder="Enter Discount Code"
                              
                            ></b-form-input>
                            <b-button type="submit" class="blue-btn">Apply Discount</b-button>
                        </b-form>
                    </b-card>
                  </b-collapse>

                  
                </div>
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
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>