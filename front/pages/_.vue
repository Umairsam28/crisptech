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
              <b-card v-if="category.children&&category.children.length>0" no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-3
                    >Categories <font-awesome-icon icon="fa-solid fa-angle-down" /></b-button
                  >
                </b-card-header>
                <b-collapse
                  id="accordion-3"
                  visible
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text>
                      <ul>
                        <li v-for="childcat in category.children" :key="childcat.id"><nuxt-link :to="'/'+childcat.slug">{{childcat.name}} {{childcat.children.length>0?'>':''}}</nuxt-link></li>
                      </ul>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card v-if="brands.length>0" no-body class="mb-1">
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
                        <li v-for="brand in brands" :key="brand.id"><nuxt-link :to="'/product-brand/'+brand.slug">{{brand.name}} <span>({{brand.products_count}})</span></nuxt-link></li>
                      </ul>

                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <!-- <b-card no-body class="mb-1">
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
              </b-card> -->

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
              <h4>{{category.name}}</h4>
            </div>
            <div class="cat-filter">
              <b-row>
                <b-col md="6">
                  <div class="view-mode">
                    <ul>
                      <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-border-all" /></nuxt-link></li>
                      <li><nuxt-link to="/productslist"><font-awesome-icon icon="fa-solid fa-list" /></nuxt-link></li>
                    </ul>
                    <span>Items {{page}}-{{totalPages}} of {{totalProducts}}</span>
                  </div>
                </b-col>
                <b-col md="6">
                  <div class="show-filter">
                    <div class="sort-div">
                      <span>Sort By</span>
                       <b-form-select @change="bySortOrder" v-model="selected" :options="options"></b-form-select>
                    &nbsp;&nbsp; <font-awesome-icon icon="fa-solid fa-list" style="font-size: 17px;" v-model="sortBy" @click="byAscDesc" />
                    </div>
                    
                  </div>
                </b-col>
              </b-row>
            </div>
            <div class="all-prod">
              <b-row>
                <b-col v-for="product in products" :key="product.id" md="3">
                  <div class="img-holder">
                    <nuxt-link :to="'/product/'+product.slug"><img :src="product.home_image" alt=""></nuxt-link>
                  </div>
                  <div class="p-details">
                  <div class="pro-name">
                    <h6>{{product.name}}</h6>
                  </div>
                  
                  <!-- <div class="star-rate">
                  <ul>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-star-half" /></li>
                  </ul>
                  <span>26</span>
                  </div> -->
                  <div class="price">
                    ${{product.actual_price}}
                  </div>

                  <div class="p-ob">
                    <b-button @click="addToCart(product, true)" type="button" class="yellow-btn">Buy Now</b-button>
                    <b-button @click="addToCart(product, false)" type="button" class="blue-btn">Add to cart</b-button>
                  </div>
                  </div>
                </b-col>
              </b-row>
              <div class="overflow-auto">
                <b-pagination-nav v-model="page" :link-gen="linkGen" :number-of-pages="totalPages" use-router></b-pagination-nav>
              </div>
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
    let lastSlug = '';
    if(params.pathMatch.indexOf('/')>=0){
      let fullUri = params.pathMatch.split('/')
      lastSlug = fullUri[(fullUri.length-1)]
    }else{
      lastSlug=params.pathMatch
    }
    return {lastSlug}
  },
  data() {
    return {
      page: 1,
      sortBy:'desc',
      totalPages: 1,
      totalProducts: 0,
      products: [],
      parents: [],
      items: [],
      brands: [],
      category: {},
      selected: 'id',
      options: [
          { value: 'id', text: 'New'},
          { value: 'name', text: 'Product Name'},
          { value: 'sale_price', text: 'Price'},
          { value: 'brand_id', text: 'Manufacturer'},
        ],
    };
  },
  methods:{
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
      }
    },
    linkGen(pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`
    },
    async getProducts(){
      let query = '?page='+this.page;
      query += '&orderBy='+this.sortBy;
      query += '&sortBy='+this.selected;
      query += '&slug='+this.lastSlug;
      await this.$axios.post('products-viaslug'+query).then(e=>{
        this.products = e.data.products.data
        this.totalProducts = e.data.products.total
        this.totalPages = e.data.products.last_page
        this.parents = e.data.parents
        this.brands = e.data.brands
        this.category = e.data.category
      })
      this.items = []
      this.items = [{
        text: "Home",
        to: "/",
      }]
      for(let i = 0; i < this.parents.length; i++){
        // console.log(parents[i].slug)
        this.items.push({
          text: this.parents[i].name,
          to: '/'+this.parents[i].slug,
          active: (this.parents[i].slug==this.lastSlug?true:false)
        })
      }
    },
    bySortOrder(){
    this.getProducts();
    },
    byAscDesc(){
    this.sortBy == 'desc'? this.sortBy = 'asc' : this.sortBy = 'desc';
    this.getProducts();
    }
  },
  mounted(){
    this.getProducts()
  },
  watch:{
    page(){
      this.getProducts()
    }
  }
};
</script>