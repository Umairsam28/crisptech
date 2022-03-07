<template>
  <div class="products">
    <!-- <nuxt-link to="/">Home</nuxt-link> -->
    <div class="bread-crumbs">
      <b-container>
         <b-row>
        <b-breadcrumb :items="items"></b-breadcrumb>
         </b-row>
      </b-container>
    </div>

    <div class="products-listing">
      <b-container>
        <b-row>
          <b-col md="3" class="sidebar">
            <h4 class="side-heading">Shop By</h4>
            <div class="accordion" role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-1
                    >Manufacturer <font-awesome-icon icon="fa-solid fa-angle-down" /></b-button
                  >
                </b-card-header>
                <b-collapse
                  id="accordion-1"
                  visible
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    
                    <b-card-text>
                      <ul>
                        <li><nuxt-link to="/products">Dell <span>(1100)</span></nuxt-link></li>
                        <li><nuxt-link to="/products">Dell <span>(1100)</span></nuxt-link></li>
                        <li><nuxt-link to="/products">Dell <span>(1100)</span></nuxt-link></li>
                        <li><nuxt-link to="/products">Dell <span>(1100)</span></nuxt-link></li>
                        <li><nuxt-link to="/products">Dell <span>(1100)</span></nuxt-link></li>
                        <li><nuxt-link to="/products">Dell <span>(1100)</span></nuxt-link></li>
                        <li><nuxt-link to="/products">Dell <span>(1100)</span></nuxt-link></li>
                        <li><nuxt-link to="/products">Dell <span>(1100)</span></nuxt-link></li>
                        <li><nuxt-link to="/products">Dell <span>(1100)</span></nuxt-link></li>
                        <li><nuxt-link to="/products">Dell <span>(1100)</span></nuxt-link></li>
                      </ul>

                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-2
                    >Price <font-awesome-icon icon="fa-solid fa-angle-down" /></b-button
                  >
                </b-card-header>
                <b-collapse
                  id="accordion-2"
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text>
                      <ul>
                        <li><nuxt-link to="/products">$0.00 - $9,999.99 <span>(1100)</span></nuxt-link></li>
                        <li><nuxt-link to="/products">$0.00 - $9,999.99 <span>(1100)</span></nuxt-link></li>
                        <li><nuxt-link to="/products">$0.00 - $9,999.99 <span>(1100)</span></nuxt-link></li>
                      </ul>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <!-- <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-3
                    > <font-awesome-icon icon="fa-solid fa-angle-down" /></b-button
                  >
                </b-card-header>
                <b-collapse
                  id="accordion-3"
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text>3</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card> -->
            </div>
          </b-col>

          <b-col md="9" class="p-area"> 
            <div class="cat-name">
              <h4>Category Name</h4>
            </div>
            <div class="cat-filter">
              <b-row>
                <b-col md="6">
                  <div class="view-mode">
                    <ul>
                      <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-border-all" /></nuxt-link></li>
                      <li><nuxt-link to="/productslist"><font-awesome-icon icon="fa-solid fa-list" /></nuxt-link></li>
                    </ul>
                    <span>Items 1-12 of 31079</span>
                  </div>
                </b-col>
                <b-col md="6">
                  <div class="show-filter">
                    <div class="sort-div">
                      <span>Sort By</span>
                       <b-form-select v-model="selected" :options="options"></b-form-select>
                    </div>
                    
                  </div>
                </b-col>
              </b-row>
            </div>
            <div class="all-prod">
              <b-row>
                <b-col md="3">
                  <div class="img-holder">
                    <nuxt-link to="productdetail"><img src="~/assets/images/card-img1.png" alt=""></nuxt-link>
                  </div>
                  <div class="p-details">
                  <div class="pro-name">
                    <h6>390-0463-02 | Sun Oracle 600GB 15000RPM SAS 6Gb/S 3.5-Inch Hard Drive</h6>
                  </div>
                  
                  <div class="star-rate">
                  <ul>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star-half" /></li>
                  </ul>
                  <span>26</span>
                  </div>
                  <div class="price">
                    $400
                  </div>

                  <div class="p-ob">
                    <b-button class="yellow-btn">Buy Now</b-button>
                    <b-button class="blue-btn">Add to cart</b-button>
                  </div>
                  </div>
                </b-col>
                <b-col md="3">
                  <div class="img-holder">
                    <nuxt-link to="productdetail"><img src="~/assets/images/card-img1.png" alt=""></nuxt-link>
                  </div>
                  <div class="p-details">
                  <div class="pro-name">
                    <h6>390-0463-02 | Sun Oracle 600GB 15000RPM SAS 6Gb/S 3.5-Inch Hard Drive</h6>
                  </div>
                  
                  <div class="star-rate">
                  <ul>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star-half" /></li>
                  </ul>
                  <span>26</span>
                  </div>
                  <div class="price">
                    $400
                  </div>

                  <div class="p-ob">
                    <b-button class="yellow-btn">Buy Now</b-button>
                    <b-button class="blue-btn">Add to cart</b-button>
                  </div>
                  </div>
                </b-col>
                <b-col md="3">
                  <div class="img-holder">
                    <nuxt-link to="productdetail"><img src="~/assets/images/card-img1.png" alt=""></nuxt-link>
                  </div>
                  <div class="p-details">
                  <div class="pro-name">
                    <h6>390-0463-02 | Sun Oracle 600GB 15000RPM SAS 6Gb/S 3.5-Inch Hard Drive</h6>
                  </div>
                  
                  <div class="star-rate">
                  <ul>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star-half" /></li>
                  </ul>
                  <span>26</span>
                  </div>
                  <div class="price">
                    $400
                  </div>

                  <div class="p-ob">
                    <b-button class="yellow-btn">Buy Now</b-button>
                    <b-button class="blue-btn">Add to cart</b-button>
                  </div>
                  </div>
                </b-col>
                <b-col md="3">
                  <div class="img-holder">
                    <nuxt-link to="productdetail"><img src="~/assets/images/card-img1.png" alt=""></nuxt-link>
                  </div>
                  <div class="p-details">
                  <div class="pro-name">
                    <h6>390-0463-02 | Sun Oracle 600GB 15000RPM SAS 6Gb/S 3.5-Inch Hard Drive</h6>
                  </div>
                  
                  <div class="star-rate">
                  <ul>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star-half" /></li>
                  </ul>
                  <span>26</span>
                  </div>
                  <div class="price">
                    $400
                  </div>

                  <div class="p-ob">
                    <b-button class="yellow-btn">Buy Now</b-button>
                    <b-button class="blue-btn">Add to cart</b-button>
                  </div>
                  </div>
                </b-col>
                <b-col md="3">
                  <div class="img-holder">
                    <nuxt-link to="productdetail"><img src="~/assets/images/card-img1.png" alt=""></nuxt-link>
                  </div>
                  <div class="p-details">
                  <div class="pro-name">
                    <h6>390-0463-02 | Sun Oracle 600GB 15000RPM SAS 6Gb/S 3.5-Inch Hard Drive</h6>
                  </div>
                  
                  <div class="star-rate">
                  <ul>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star-half" /></li>
                  </ul>
                  <span>26</span>
                  </div>
                  <div class="price">
                    $400
                  </div>

                  <div class="p-ob">
                    <b-button class="yellow-btn">Buy Now</b-button>
                    <b-button class="blue-btn">Add to cart</b-button>
                  </div>
                  </div>
                </b-col>
                <b-col md="3">
                  <div class="img-holder">
                    <nuxt-link to="productdetail"><img src="~/assets/images/card-img1.png" alt=""></nuxt-link>
                  </div>
                  <div class="p-details">
                  <div class="pro-name">
                    <h6>390-0463-02 | Sun Oracle 600GB 15000RPM SAS 6Gb/S 3.5-Inch Hard Drive</h6>
                  </div>
                  
                  <div class="star-rate">
                  <ul>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star-half" /></li>
                  </ul>
                  <span>26</span>
                  </div>
                  <div class="price">
                    $400
                  </div>

                  <div class="p-ob">
                    <b-button class="yellow-btn">Buy Now</b-button>
                    <b-button class="blue-btn">Add to cart</b-button>
                  </div>
                  </div>
                </b-col>
                <b-col md="3">
                  <div class="img-holder">
                    <nuxt-link to="productdetail"><img src="~/assets/images/card-img1.png" alt=""></nuxt-link>
                  </div>
                  <div class="p-details">
                  <div class="pro-name">
                    <h6>390-0463-02 | Sun Oracle 600GB 15000RPM SAS 6Gb/S 3.5-Inch Hard Drive</h6>
                  </div>
                  
                  <div class="star-rate">
                  <ul>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star-half" /></li>
                  </ul>
                  <span>26</span>
                  </div>
                  <div class="price">
                    $400
                  </div>

                  <div class="p-ob">
                    <b-button class="yellow-btn">Buy Now</b-button>
                    <b-button class="blue-btn">Add to cart</b-button>
                  </div>
                  </div>
                </b-col>
                <b-col md="3">
                  <div class="img-holder">
                    <nuxt-link to="productdetail"><img src="~/assets/images/card-img1.png" alt=""></nuxt-link>
                  </div>
                  <div class="p-details">
                  <div class="pro-name">
                    <h6>390-0463-02 | Sun Oracle 600GB 15000RPM SAS 6Gb/S 3.5-Inch Hard Drive</h6>
                  </div>
                  
                  <div class="star-rate">
                  <ul>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star-half" /></li>
                  </ul>
                  <span>26</span>
                  </div>
                  <div class="price">
                    $400
                  </div>

                  <div class="p-ob">
                    <b-button class="yellow-btn">Buy Now</b-button>
                    <b-button class="blue-btn">Add to cart</b-button>
                  </div>
                  </div>
                </b-col>
                <b-col md="3">
                  <div class="img-holder">
                    <nuxt-link to="productdetail"><img src="~/assets/images/card-img1.png" alt=""></nuxt-link>
                  </div>
                  <div class="p-details">
                  <div class="pro-name">
                    <h6>390-0463-02 | Sun Oracle 600GB 15000RPM SAS 6Gb/S 3.5-Inch Hard Drive</h6>
                  </div>
                  
                  <div class="star-rate">
                  <ul>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star-half" /></li>
                  </ul>
                  <span>26</span>
                  </div>
                  <div class="price">
                    $400
                  </div>

                  <div class="p-ob">
                    <b-button class="yellow-btn">Buy Now</b-button>
                    <b-button class="blue-btn">Add to cart</b-button>
                  </div>
                  </div>
                </b-col>
                <b-col md="3">
                  <div class="img-holder">
                    <nuxt-link to="productdetail"><img src="~/assets/images/card-img1.png" alt=""></nuxt-link>
                  </div>
                  <div class="p-details">
                  <div class="pro-name">
                    <h6>390-0463-02 | Sun Oracle 600GB 15000RPM SAS 6Gb/S 3.5-Inch Hard Drive</h6>
                  </div>
                  
                  <div class="star-rate">
                  <ul>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star-half" /></li>
                  </ul>
                  <span>26</span>
                  </div>
                  <div class="price">
                    $400
                  </div>

                  <div class="p-ob">
                    <b-button class="yellow-btn">Buy Now</b-button>
                    <b-button class="blue-btn">Add to cart</b-button>
                  </div>
                  </div>
                </b-col>
                <b-col md="3">
                  <div class="img-holder">
                    <nuxt-link to="productdetail"><img src="~/assets/images/card-img1.png" alt=""></nuxt-link>
                  </div>
                  <div class="p-details">
                  <div class="pro-name">
                    <h6>390-0463-02 | Sun Oracle 600GB 15000RPM SAS 6Gb/S 3.5-Inch Hard Drive</h6>
                  </div>
                  
                  <div class="star-rate">
                  <ul>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star-half" /></li>
                  </ul>
                  <span>26</span>
                  </div>
                  <div class="price">
                    $400
                  </div>

                  <div class="p-ob">
                    <b-button class="yellow-btn">Buy Now</b-button>
                    <b-button class="blue-btn">Add to cart</b-button>
                  </div>
                  </div>
                </b-col>
                <b-col md="3">
                  <div class="img-holder">
                    <nuxt-link to="productdetail"><img src="~/assets/images/card-img1.png" alt=""></nuxt-link>
                  </div>
                  <div class="p-details">
                  <div class="pro-name">
                    <h6>390-0463-02 | Sun Oracle 600GB 15000RPM SAS 6Gb/S 3.5-Inch Hard Drive</h6>
                  </div>
                  
                  <div class="star-rate">
                  <ul>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star-half" /></li>
                  </ul>
                  <span>26</span>
                  </div>
                  <div class="price">
                    $400
                  </div>

                  <div class="p-ob">
                    <b-button class="yellow-btn">Buy Now</b-button>
                    <b-button class="blue-btn">Add to cart</b-button>
                  </div>
                  </div>
                </b-col>
                <b-col md="3">
                  <div class="img-holder">
                    <nuxt-link to="productdetail"><img src="~/assets/images/card-img1.png" alt=""></nuxt-link>
                  </div>
                  <div class="p-details">
                  <div class="pro-name">
                    <h6>390-0463-02 | Sun Oracle 600GB 15000RPM SAS 6Gb/S 3.5-Inch Hard Drive</h6>
                  </div>
                  
                  <div class="star-rate">
                  <ul>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star-half" /></li>
                  </ul>
                  <span>26</span>
                  </div>
                  <div class="price">
                    $400
                  </div>

                  <div class="p-ob">
                    <b-button class="yellow-btn">Buy Now</b-button>
                    <b-button class="blue-btn">Add to cart</b-button>
                  </div>
                  </div>
                </b-col>
                <b-col md="3">
                  <div class="img-holder">
                    <nuxt-link to="productdetail"><img src="~/assets/images/card-img1.png" alt=""></nuxt-link>
                  </div>
                  <div class="p-details">
                  <div class="pro-name">
                    <h6>390-0463-02 | Sun Oracle 600GB 15000RPM SAS 6Gb/S 3.5-Inch Hard Drive</h6>
                  </div>
                  
                  <div class="star-rate">
                  <ul>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star-half" /></li>
                  </ul>
                  <span>26</span>
                  </div>
                  <div class="price">
                    $400
                  </div>

                  <div class="p-ob">
                    <b-button class="yellow-btn">Buy Now</b-button>
                    <b-button class="blue-btn">Add to cart</b-button>
                  </div>
                  </div>
                </b-col>
              </b-row>
            </div>
            
          </b-col>
        </b-row>
      </b-container>
    </div>
    
  </div>
  
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    
  },
  data() {
    return {
      selected: null,
      options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ],
      items: [
        {
          text: "Home",
          href: "/",
        },
        {
          text: "Products",
          active: true,
        },
      ],
    };
  },
};
</script>