<template>
  <div class="main">
    <!-- TOP CAT -->
    <div class="all-cat-t">
      <b-container>
        <ul>
            <li v-for="category in categories" :key="category.id">
              <p>
              <nuxt-link :to="'/'+category.slug">
                {{category.name}}
              </nuxt-link>
              </p>
            </li>
        </ul>
        </b-container>
    </div>
    <!-- END TOP CAT -->
    <!-- BANNER -->
    <div class="top-banner">
      <b-container>
        <b-carousel
          id="carousel-1"
          fade          
          v-model="slide"
          :interval="4000"
          controls
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- SLIDE 01 -->
          <b-carousel-slide
            v-for="banner in banners"
            :key="banner.id"
            :img-src="banner.image_url"
          ></b-carousel-slide>
        </b-carousel>
      </b-container>
    </div>
    <!-- END BANNER -->

    <!-- ALL CATEGORY -->
    <!-- <div class="all-cat">
      <b-container>
        <div class="max-holder">
          <b-row>
            <b-col v-for="category in categories" sm="2" :key="category.id">
              <nuxt-link :to="'/'+category.slug">
                <div class="img-holder">
                  <img :src="category.image_url" alt="" />
                </div>
                <h5>{{category.name}}</h5>
              </nuxt-link>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div> -->
    <!-- END ALL CATEGORY -->
    
    <!-- P LIST -->


    <!-- THREE COL -->
    <div class="three-col">
      <b-container>
        <div class="content-container">
          <h2 class="sec-heading">Featured Products</h2>
          <div class="all-prod">
              <b-row>
                <b-col v-for="featured_product in featured_products" :key="featured_product.id">
                  <div class="inner">
                    <nuxt-link :to="'/product/'+featured_product.slug">
                      <div class="img-holder">
                        <img :src="featured_product.home_image" alt="" />
                      </div>
                    </nuxt-link>
                  <div class="p-details">
                    <nuxt-link :to="'/product/'+featured_product.slug">
                  <div class="pro-name">
                    <h5>{{featured_product.name}}</h5>
                  </div></nuxt-link>
                  
                  
                 <!-- <div class="price_container"><span class="old-price">$548.44</span><span class="new_price">${{featured_product.actual_price}}</span></div> -->
                 <ProductPrice :product="featured_product" />
                 
                  <PercentSave :product="featured_product" />
                  
                  <div class="p-ob">
                    <b-button @click="addToCart(product, true)" type="button" class="yellow-btn">Buy Now</b-button>
                    <b-button @click="addToCart(product, false)" type="button" class="blue-btn">Add to cart</b-button>
                  </div>
                  </div>
                  </div>
                </b-col>
              </b-row>
              
            </div>
          <!-- <b-row>
            
            <b-col v-for="featured_product in featured_products" md="3" :key="featured_product.id">
              <nuxt-link :to="'/product/'+featured_product.slug">

                <div class="img-holder">
                  <img :src="featured_product.home_image" alt="" />
                  
                </div>
                <div class="pro-desc">
                  <h5>{{featured_product.name}}</h5>
                </div>
                <b-row class="other-details">
                  <b-col md="12">
                    <div class="star-rate">
                      <ul>
                        <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                        <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                        <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                        <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                        <li>
                          <font-awesome-icon icon="fa-solid fa-star-half" />
                        </li>
                      </ul>
                      <span>26</span>
                    </div>
                    <div class="p-price">
                      <h3>{{featured_product.actual_price}}</h3>
                    </div>
                    <div v-if="featured_product.discount>0" class="save">
                      <strike class="text-black">{{featured_product.price}}</strike>
                      <strong>Save ${{featured_product.discount_amount}} Instantly</strong>
                    </div>
                  </b-col>
                </b-row>
              </nuxt-link>
            </b-col>
            
          </b-row> -->
        </div>
      </b-container>
    </div>
    <!-- END THREE COL -->

    <!-- INLINE COL -->
    <div class="three-col" >
      <b-container>
        <div class="content-container">
          <h2 class="sec-heading">Most Selling Products</h2>
          <div class="all-prod">
               <b-row>
                <b-col v-for="most_selling_product in most_selling_products" :key="most_selling_product.id" v-show="most_selling_product.product">
                  <div v-if="most_selling_product.product" class="content-holder no-lr">
                  <div class="inner">
                    
                  <div class="img-holder">
                    <nuxt-link :to="'/product/'+most_selling_product.product.slug">
                      <img :src="most_selling_product.product.image_url" alt=""/>
                    </nuxt-link>
                  
                  </div>
                  <div class="p-details">
                    <nuxt-link :to="'/product/'+most_selling_product.product.slug">
                  <div class="pro-name">
                    <h5>{{most_selling_product.product.name}}</h5>
                  </div></nuxt-link>
                  
                  <ProductPrice :product="most_selling_product.product" />
                 
                 
                  <PercentSave :product="most_selling_product.product" />
                  
                  <div class="p-ob">
                    <b-button @click="addToCart(product, true)" type="button" class="yellow-btn">Buy Now</b-button>
                    <b-button @click="addToCart(product, false)" type="button" class="blue-btn">Add to cart</b-button>
                  </div>
                  </div>
                  </div>
                  </div>
                </b-col>
              </b-row>
              
            </div>
          <b-row>
            <!-- PRODUCT -->
            <!-- <b-col v-for="most_selling_product in most_selling_products" md="4" :key="most_selling_product.id" v-show="most_selling_product.product">
              <b-row v-if="most_selling_product.product" class="content-holder no-lr">
                <b-col md="5" class="img-holder">
                  <nuxt-link :to="'/product/'+most_selling_product.product.slug">
                    <img :src="most_selling_product.product.image_url" alt=""
                  /></nuxt-link>
                </b-col>
                <b-col md="7" class="pro-details">
                  <h5>{{most_selling_product.product.name}}</h5>
                  
                  <ProductPrice :product="most_selling_product.product" />
                </b-col>
              </b-row>
            </b-col> -->
            <!-- END PRODUCT -->
          </b-row>
        </div>
      </b-container>
    </div>
    <!-- END INLINE COL -->

    <!-- BRANDS -->
    <div class="brands">
      <b-container>
        <div class="col-md-12">
          <VueSlickCarousel
            v-bind="{
              slidesToScroll: 1,
              slidesToShow: 6,
              arrows: true,
              autoplay: true,
            }"
          >
            <div><img src="~/assets/images/hp.png" alt="" /></div>
            <div><img src="~/assets/images/ibm.png" alt="" /></div>
            <div><img src="~/assets/images/intel.png" alt="" /></div>
            <div><img src="~/assets/images/lenovo.png" alt="" /></div>
            <div><img src="~/assets/images/linksys.png" alt="" /></div>
            <div><img src="~/assets/images/netapp.png" alt="" /></div>
            <div><img src="~/assets/images/fujitsu.png" alt="" /></div>
            <div><img src="~/assets/images/cisco.png" alt="" /></div>
            <div><img src="~/assets/images/dell.png" alt="" /></div>
            <div><img src="~/assets/images/dell-emc.png" alt="" /></div>
            <div><img src="~/assets/images/force10.png" alt="" /></div>
          </VueSlickCarousel>
        </div>
      </b-container>
    </div>
    <!-- END BRANDS -->

    <!-- <nuxt-link to="/products">about</nuxt-link> -->

    <!-- INFO BANNERS -->
    <div class="info-banners">
      <b-container>
        <b-row>
          <b-col md="3">
            <img src="~/assets/images/free-shipping1.png" alt="" />
          </b-col>
          <b-col md="3">
            <img src="~/assets/images/free-shipping2.png" alt="" />
          </b-col>
          <b-col md="3">
            <img src="~/assets/images/free-shipping3.png" alt="" />
          </b-col>
          <b-col md="3">
            <img src="~/assets/images/free-shipping4.png" alt="" />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!-- END INFO BANNERS -->
  </div>
</template>

<script>
export default {
  // name: 'MyComponent',
  async asyncData({ params, $axios }) {
    const {banners, categories, featured_products, most_selling_products} = await $axios.$get('home')
    return {banners, categories, featured_products, most_selling_products} 
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },

  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    addToCart(product, redirect=true){
      var stock_available_bool = false
      if(product.in_stock==1){
        stock_available_bool=true
        if(product.manage_stock==1){
          stock_available_bool=false
          if(product.stock_qty>0){
            stock_available_bool=true
          }
        }
      }
      if(stock_available_bool===true){
        this.$store.commit('cart/add', {item: product,quantity: 1, redirect: redirect})
      }else{
        this.$store.commit('cart/lowstock', {item: product})
      }
    },
  },
};
</script>