<template>
  <div>
    <v-breadcrumbs :items="bread">
      <template v-slot:divider>
        <v-icon>mdi-forward</v-icon>
      </template></v-breadcrumbs
    >
</v-breadcrumbs>
<v-row no-gutters  class="grey lighten-5 pa-10 rounded elevation-10">
<v-col
cols="12"
sm="12"
>
<v-form
ref="form"
v-model="loading"
lazy-validation
>

<v-row>
<v-col
  cols="6"
  sm="6"
  class="pb-0"
>
  <v-text-field
    :value="form.email"
    label="Email"
    readonly
  ></v-text-field>
</v-col>

<v-col
  cols="6"
  sm="6"
  class="pb-0"
>
  <v-text-field
    :value="form.qty"
    label="Quantity"
    readonly
  ></v-text-field>
</v-col>
<v-col
  cols="12"
  sm="12"
  class="pb-0"
>
<v-textarea
    outlined
    label="Message"
    :value="form.message"
></v-textarea>
</v-col>

<v-col
  cols="12"
  sm="12"
  class="pb-0"
>
<v-card
    color="primary"
    dark
  >
  <label v-if="form.product">Selected SKU: {{form.product.sku}}</label>
  <v-card-text>
    <v-autocomplete
    v-model="autocomplete.model"
    :items="autocomplete.entries"
    :loading="autocomplete.isLoading"
    :search-input.sync="autocomplete.search"
    color="white"
    hide-no-data
    hide-selected
    item-text="sku"
    item-value="id"
    label="Product"
    placeholder="Start typing to Search"
    prepend-icon="mdi-database-search"
    return-object
    ></v-autocomplete>
  </v-card-text>
  <v-divider></v-divider>
  <v-expand-transition>
    <v-list
    v-if="autocomplete.entries.length>0"
    class="primary lighten-2"
    >
    <v-list-item
        v-for="(field, i) in autocomplete.entries"
        :key="i"
    >
        <v-list-item-content>
        <v-list-item-title v-text="field.sku+'|'+field.part_number"></v-list-item-title>
        <v-list-item-subtitle v-text="field.id"></v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
    </v-list>
</v-expand-transition>
</v-card>
</v-col>

</v-row>

</v-form>
</v-col>
</v-row>
  </div>
</template>

<script>
import productquoteservice from "@services/auth/productquote";
import productservice from "@services/auth/product";
export default {
  name: "auth.product_quotes.add",
  watch:{
    'autocomplete.search': async function(){
        // if (this.autocomplete.items.length > 0) return
        if (this.autocomplete.isLoading) return
        if (!this.autocomplete.search) return
        this.autocomplete.isLoading = true
        await productservice.getlist('?search='+this.autocomplete.search+'&perpage=20&restrict=true').then(e=>{
            this.autocomplete.entries = e.data
        })
        this.autocomplete.isLoading = false
    },
  },
  methods: {
    
  },
  computed: {
    user() {
        return this.$store.getters.loggedInUser;
    },
  },
  data() {
    return {
      form:{
          id: (this.$route.params.id?this.$route.params.id:0),
          email: '',
          qty: 0,
          message: '',
          product_id: 0,
      },
      autocomplete:{
          isLoading: false,
          model: '',
          search: '',
          entries: [],
      },
      bread: [
        {
          text: "Dashboard",
          to: { name: "auth.dashboard" },
          disabled: false,
          exact: true,
        },
        {
          text: "Product Quote",
          to: { name: "auth.product_quotes.listing" },
          disabled: false,
          exact: true,
        },
        {
          text: "View",
          to: { name: "auth.product_quotes.edit", params: {id: this.$route.params.id} },
          disabled: false,
          exact: true,
        }
      ],
      loading: false,
      btnloading: false,
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
  async mounted(){
    if(this.$route.params.id){
        var res = await productquoteservice.get(this.form.id)
        this.form = {
            email: res.email,
            qty: res.qty,
            message: res.message,
            product_id: res.product_id,
            id: this.$route.params.id,
            product: res.product,
        }
        // console.log(res.product.sku)
        // this.autocomplete.model = res.product.sku
        this.autocomplete.search = res.product.sku
        let formData = new FormData()
        formData.append('is_new',0)
        productquoteservice.update(formData, this.$route.params.id)
    }
  },
};
</script>
