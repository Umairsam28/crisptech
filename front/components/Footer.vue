<template>
  <footer>
    <div class="footer-top">
      <b-container>
        <b-row>
          <b-col md="7" class="left-area">
            <b-row>
              <b-col md="4">
                <h5>Categories</h5>
                <ul>
                  <li><nuxt-link to="/about">CPU</nuxt-link></li>
                  <li><nuxt-link to="/about">Display</nuxt-link></li>
                  <li><nuxt-link to="/about">Memory</nuxt-link></li>
                  <li><nuxt-link to="/about">Motherboard</nuxt-link></li>
                  <li><nuxt-link to="/about">Networking</nuxt-link></li>
                  <li><nuxt-link to="/about">Power Supply</nuxt-link></li>
                  <li><nuxt-link to="/about">Storage</nuxt-link></li>
                </ul>
              </b-col>

              <b-col md="4">
                <h5>My Account</h5>
                <ul>
                  <li><nuxt-link to="/about">Login</nuxt-link></li>
                  <li><nuxt-link to="/about">Register</nuxt-link></li>
                </ul>
                <h5>Information</h5>
                <ul>
                  <li><nuxt-link to="/about">About Us</nuxt-link></li>
                  <li><nuxt-link to="/about">Contact Us</nuxt-link></li>
                </ul>
              </b-col>

              <b-col md="4">
                <h5>Customer Services</h5>
                <ul>
                  <li><nuxt-link to="/about">Privacy Policy</nuxt-link></li>
                  <li><nuxt-link to="/about">Return Policy</nuxt-link></li>
                  <li>
                    <nuxt-link to="/about">Warranty information</nuxt-link>
                  </li>
                  <li><nuxt-link to="/about">Shipping Policy</nuxt-link></li>
                  <li><nuxt-link to="/about">RMA Policy</nuxt-link></li>
                  <li>
                    <nuxt-link to="/about">International Orders</nuxt-link>
                  </li>
                </ul>
              </b-col>
            </b-row>
          </b-col>
          <b-col md="5" class="right-area">
            <b-row>
              <b-col md="6">
                <h5>Contact Us</h5>
                <ul>
                  <li><font-awesome-icon icon="fa-solid fa-map-location-dot" />11814 Hueco Tanks Dr, Sugar Land TX 77498</li>
                  <li><font-awesome-icon icon="fa-solid fa-headset" /><a href="tel:+18323440072">+1 (832) 344-0072</a></li>
                  <li><font-awesome-icon icon="fa-solid fa-envelope-open-text" />
                    <a href="mailto:Support@Nexthdd.Com">Support@Nexthdd.Com</a>
                  </li>
                  <li>
                    Timings (Phone & Chat): 7:00 AM CST to 6:00 PM (Monday to Friday)
                  </li>
                </ul>
              </b-col>
              <b-col md="6">
                <h5>Newsletter</h5>
                <p>
                  Subscribe to our newsletter get 10% off your first purchase at
                  here for update.
                </p>
                <b-form @submit="onSubmit" v-if="show">
                  <div class="form-inner">
                    <b-form-group>
                      <b-form-input
                        id="input-2"
                        v-model="form.name"
                        placeholder="Enter Your Email"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <b-button type="submit" variant="primary"
                      ><font-awesome-icon icon="fa-regular fa-paper-plane" /></b-button>
                  </div>
                </b-form>
              </b-col>
            </b-row>
          </b-col>
          <b-col md="12" class="full-area">
              <img src="~/assets/images/payment-method1.png" alt="payments-logo" />
              <p>NextHDD.com is not a partner or an affiliate of Cisco Systems. All Logos remain intellectual property of the Corresponding Company.
</p>
                <ul>
                    <li><a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a></li>
                    <li><a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a></li>
                    <li><a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a></li>
                    <li><a href="#"><font-awesome-icon icon="fa-brands fa-pinterest-p" /></a></li>
                    <li><a href="#"><font-awesome-icon icon="fa-brands fa-linkedin-in" /></a></li>
                </ul>
          </b-col>
          </b-row>
      </b-container>
    </div>
    <div class="footer-bottom">
        <p>Copyright © 2021 NextHDD. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
 
  data() {
    return {
      components: {
    FontAwesomeIcon
    
  },
      form: {
        name: "",
      },

      show: true,
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