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
          <b-col md="2" class="sidebar">
            <h4 class="side-heading">Shop By</h4>
            <div class="accordion" role="tablist">
              <b-card v-if="category.children&&category.children.length>0" no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-3>Categories <i aria-hidden="true" class="fa fa-angle-down"></i></b-button>
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
                  <b-button block v-b-toggle.accordion-1>Manufacturer <i aria-hidden="true" class="fa fa-angle-down"></i></b-button>
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

          <b-col md="10" class="p-area"> 
            <div class="cat-name">
              <h4>{{category.name}}</h4>
            </div>
            <div class="cat-filter">
              <b-row>
                <b-col md="6">
                  <div class="view-mode">
                    <ul>
                      <li><nuxt-link to="/products"><i aria-hidden="true" class="fa fa-th"></i></nuxt-link></li>
                      <li><nuxt-link to="/productslist"><i aria-hidden="true" class="fa fa-list-ul"></i></nuxt-link></li>
                    </ul>
                    <span>Items {{page}}-{{totalPages}} of {{totalProducts}}</span>
                  </div>
                </b-col>
                <b-col md="6">
                  <div class="show-filter">
                    <div class="sort-div">
                      <span>Sort By</span>
                       <b-form-select @change="getProducts" v-model="selected" :options="options"></b-form-select>
                    <!-- &nbsp;&nbsp; <font-awesome-icon icon="fa-solid fa-list" style="font-size: 17px;" v-model="sortBy" @click="byAscDesc" /> -->
                    </div>
                    
                  </div>
                </b-col>
              </b-row>
            </div>
            <div class="all-prod">
              <b-row>
                <b-col v-for="product in products" :key="product.id" md="3">
                  <ProductListCard :product="product" />
                </b-col>
              </b-row>
              <div class="overflow-auto">
                <b-pagination-nav v-model="page" :link-gen="linkGen" :number-of-pages="totalPages" use-router>
                  <template #first-text><i class="fa fa-angle-double-left" aria-hidden="true"></i></template>
                  <template #prev-text><i class="fa fa-angle-left" aria-hidden="true"></i></template>
                  <template #next-text><i class="fa fa-angle-right" aria-hidden="true"></i></template>
                  <template #last-text><i class="fa fa-angle-double-right" aria-hidden="true"></i></template>
                </b-pagination-nav>
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
        active: false,
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