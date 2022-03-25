<template>
  <b-container>
    <div class="bold-head">
      <h2>Brands</h2>
      <div class="search-area">
        <input v-model="q" type="text" name="" placeholder="search a brand name" />
        <button @click="getBrands"><i class="fa fa-search" aria-hidden="true"></i></button>
      </div>
    </div>
    <hr />
    <ul class="b-sort">
      <li
        @click="filter = filter_ar"
        v-for="(filter_ar, filter_ark) in filter_arr"
        :key="filter_ark"
      >
        <a href="#!" :class="filter_ar == filter ? 'active' : ''">{{
          filter_ar
        }}</a>
      </li>
    </ul>
    <div class="brand-list">
      <b-row v-if="!loading">
        <b-col v-for="brand in brands" :key="brand.id" md="2">
          <div class="inner">
            <nuxt-link :to="'/product-brand/'+brand.slug">
              <div class="img-holder">
                <img :src="brand.image_url" alt="" />
              </div>
              <h3>{{brand.name}}</h3>
            </nuxt-link>
          </div>
        </b-col>
      </b-row>
      <b-row v-else>
        <b-col v-for="qq in 12" :key="qq" md="2">
          <b-skeleton-wrapper :loading="loading">
            <template #loading>
              <b-card>
                <b-skeleton width="85%"></b-skeleton>
                <b-skeleton width="55%"></b-skeleton>
              </b-card>
            </template>
          </b-skeleton-wrapper>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>
<script>
export default {
  // name: 'MyComponent',
  async asyncData({ params, $axios }) {},
  data() {
    return {
      brands: [],
      filter: "All",
      loading: false,
      q: '',
      filter_arr: [
        "All",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
    };
  },
  mounted() {
    this.getBrands();
  },
  methods: {
    getBrands() {
      this.loading = true;
      this.$axios.get("brands?filter=" + this.filter+'&q='+this.q).then((e) => {
        this.brands = e.data.brands;
        this.loading = false;
      });
    },
  },
  watch: {
    filter() {
      this.getBrands();
    },
  },
};
</script>