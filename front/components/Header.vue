<template>
  <header>
    <!-- TOP BAR -->
    <div class="top-bar">
      <b-container>
        <p>
          We Accept PO's from Fortune 1000 companies, Government Agencies
          (Federal, State, Local), Universites, Schools and Colleges
        </p>
      </b-container>
    </div>
    <!-- END TOP BAR -->

    <!-- MID BAR -->
    <div class="nav-mid">
      <b-container class="d-flex">
        <!-- LOGO -->
        <div class="header-left">
          <div class="header-logo">
            <nuxt-link to="/" class="logo">
              <img src="~/assets/images/next-logo2.png" alt="nextHDD-logo" />
            </nuxt-link>
          </div>
        </div>
        <!-- END LOGO -->

        <div class="headerright">
          <b-form @submit="onSubmit" v-if="show">
            <div class="form-inner">
              <b-form-group>
                <b-form-input
                  id="input-2"
                  v-model="form.name"
                  placeholder="Enter name"
                  required
                ></b-form-input>
              </b-form-group>
              <b-button type="submit" variant="primary"><i aria-hidden="true" class="fa fa-search"></i></b-button>
            </div>
          </b-form>
          <div class="contact-info">
            <ul>
              <li>
                <i aria-hidden="true" class="fa fa-phone"></i>
                <span>+1 (832) 344 - 0072</span>
              </li>
              <li>
                <i aria-hidden="true" class="fa fa-commenting-o"></i>
                <span>Chat Now</span>
              </li>
            </ul>
          </div>
          <div class="rquote">
            <b-button v-b-modal.modal-1><i aria-hidden="true" class="fa fa-quote-right"></i> Request For Quote</b-button>
          </div>
        </div>
      </b-container>
    </div>

    <!-- LAST BAR  -->
    <div class="last-bar">
      <b-container>
        <b-row>
          <b-col v-b-hover="toggleCollapseMega" md="2">
            <div class="menu-btn">
              <b-button v-b-toggle.collapse-1 variant="primary">
                <i aria-hidden="true" class="fa fa-list"></i>
                <span>Categories</span>
                <i aria-hidden="true" class="fa fa-caret-down"></i>
              </b-button>
              <b-collapse v-model="mycollapse1toggle" id="collapse-1" class="">
                <b-card>
                  <div class="menu-blk">
                    <ul class="menu">
                      <li v-for="sidemenuname in sidemenu" :key="sidemenuname.id">
                        <nuxt-link :to="'/' + sidemenuname.slug">
                          <i aria-hidden="true" class="fa fa-long-arrow-right"></i>
                          {{ sidemenuname.category_alias }}
                        </nuxt-link>
                        <div v-if="sidemenuname.children.length>0" class="megadrop">
                          <b-row>
                            <b-col
                              v-for="childOne in sidemenuname.children"
                              md="4"
                              :key="childOne.id"
                              ><h3><nuxt-link :to="'/' + childOne.slug">{{ childOne.category_alias }}</nuxt-link></h3>
                              <ul>
                                <li
                                  v-for="childTwo in childOne.children"
                                  :key="childTwo.id"
                                >
                                  <nuxt-link :to="'/' + childTwo.slug">
                                  <i aria-hidden="true" class="fa fa-angle-right"></i>
                                  {{ childTwo.category_alias }}
                                  </nuxt-link>
                                </li>
                              </ul>
                            </b-col>
                          </b-row>
                        </div>
                      </li>
                    </ul>
                  </div>
                </b-card>
              </b-collapse>
            </div>
          </b-col>
          <b-col md="10">
            <ul class="mid-links">
              <li v-for="mainmenunames in mainmenu" :key="mainmenunames.id">
                <nuxt-link :to="'/' + mainmenunames.slug">{{
                  mainmenunames.category_alias
                }}</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/products"><i aria-hidden="true" class="fa fa-truck"></i> Track Your Order</nuxt-link>
              </li>
            </ul>
            <ul v-if="!loggedIn" class="login-links">
              <li><nuxt-link to="/login">Sign In/Sign Up</nuxt-link></li>
            </ul>
            <ul v-else class="login-links">
              <li><nuxt-link to="/customer">Dashboard</nuxt-link></li>
              <li><nuxt-link to="/customer/logout">Logout</nuxt-link></li>
            </ul>
            <div class="cart">
              <div v-b-toggle.my-collapse2>
                <div class="cart-logo">
                  <i aria-hidden="true" class="fa fa-shopping-cart"></i>
                  <span>{{ cartItems.length }}</span>
                </div>
                <div class="cart-info">
                  My Cart <span>${{ parseFloat(cartTotal).toFixed(2) }}</span>
                </div>
              </div>
              <b-collapse id="my-collapse2" v-model="mycollapse2toggle">
                <b-card>
                  <div v-if="cartItems.length == 0" class="no-item">
                    You have no items in your shopping cart.
                  </div>

                  <div v-else class="cart-items">
                    <b-row
                      v-for="(cartItem, cartItemIndex) in cartItems"
                      :key="cartItemIndex"
                    >
                      <b-col md="4">
                        <div class="img-holder">
                          <img
                            :src="cartItem.product.home_image"
                            alt="nextHDD-logo"
                          />
                        </div>
                        <ul class="edit-pro">
                          <li>
                            <b-button
                              variant="link"
                              size="sm"
                              @click="removeItem(cartItemIndex)"
                            >
                              <i aria-hidden="true" class="fa fa-trash-o"></i>
                            </b-button>
                          </li>
                          <li>
                            <b-button
                              variant="link"
                              :to="'/product/' + cartItem.product.slug"
                              size="sm"
                            >
                              <i aria-hidden="true" class="fa fa-pencil"></i>
                            </b-button>
                          </li>
                        </ul>
                      </b-col>
                      <b-col md="8">
                        <div class="pro-info">
                          <div class="cp-name">
                            {{ cartItem.product.part_number }}
                          </div>
                          <div class="cp-price">
                            ${{ cartItem.product.actual_price }}
                          </div>
                          <div class="cp-quantity">
                            <span>Qty:</span>
                            <b-form>
                              <b-form-input
                                id="input-1"
                                :value="parseInt(cartItem.quantity)"
                                type="number"
                              ></b-form-input>
                              <!-- <b-button type="submit" class="blue-btn"
                                >Update</b-button
                              > -->
                            </b-form>
                          </div>
                        </div>
                      </b-col>
                    </b-row>
                  </div>
                  <div class="cart-action">
                    <div class="total-items">
                      <strong>{{ cartItems.length }}</strong> items
                    </div>
                    <ul class="cart-total-price">
                      <li>Cart Subtotal:</li>
                      <li>${{ parseFloat(cartTotal).toFixed(2) }}</li>
                    </ul>
                    <div v-if="cartItems.length > 0" class="link-btns">
                      <nuxt-link to="/checkout" class="blue-btn"
                        >Go to Checkout</nuxt-link
                      >
                      <nuxt-link to="/cart" class="yellow-btn"
                        >View and Edit Cart</nuxt-link
                      >
                    </div>
                  </div>
                </b-card>
              </b-collapse>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!-- END LAST BAR  -->
  </header>
</template>

<script>
export default {
  mounted() {
    this.$axios.get("menu").then((e) => {
      this.mainmenu = e.data.mainmenu;
      this.sidemenu = e.data.sidemenu;
    });
  },
  data() {
    return {
      form: {
        name: "",
      },
      show: true,
      sidemenu: [],
      mainmenu: [],
      mycollapse2toggle: false,
      mycollapse1toggle: false,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    removeItem(index) {
      this.$store.commit("cart/remove", {
        index: index,
      });
    },
    toggleCollapseMega(hovered){
      this.mycollapse1toggle = hovered
    }
  },
  computed: {
    cartTotal() {
      return this.$store.state.cart.total;
    },
    cartItems() {
      return this.$store.state.cart.items;
    },
    loggedIn(){
      return this.$store.state.loggedIn;
    }
  },
  watch:{
    $route(){
      this.mycollapse2toggle = false
      this.mycollapse1toggle = false
      //turn off menu here
    }
  }
};
</script>