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
    :value="form.name"
    label="Name"
    readonly
  ></v-text-field>
</v-col>
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
    :value="form.phone"
    label="Phone"
    readonly
  ></v-text-field>
</v-col>
<v-col
  cols="6"
  sm="6"
  class="pb-0"
>
  <v-text-field
    :value="form.condition"
    label="Condition"
    readonly
  ></v-text-field>
</v-col>

<v-col
  cols="6"
  sm="6"
  class="pb-0"
>
  <v-text-field
    :value="form.quantity"
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
    readonly
    :value="form.description"
></v-textarea>
</v-col>

</v-row>

</v-form>
</v-col>
</v-row>
  </div>
</template>

<script>
import productquoteservice from "@services/auth/productquote";
import defaultservice from "@services/auth/default";
const service = new defaultservice('quote-forms')
export default {
  name: "auth.product_quotes.add",
  watch:{
    
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
      MIX_FRONT_WEBSITE_URL: process.env.MIX_FRONT_WEBSITE_URL,
      form:{
          id: (this.$route.params.id?this.$route.params.id:0),
          email: '',
          name: '',
          condition: '',
          phone: '',
          quantity: 0,
          description: '',
      },
      bread: [
        {
          text: "Dashboard",
          to: { name: "auth.dashboard" },
          disabled: false,
          exact: true,
        },
        {
          text: "Quotes",
          to: { name: "auth.quote_forms.listing" },
          disabled: false,
          exact: true,
        },
        {
          text: "View",
          to: { name: "auth.quote_forms.view", params: {id: this.$route.params.id} },
          disabled: true,
          exact: true,
        }
      ],
      loading: false,
      btnloading: false,
    };
  },
  async mounted(){
    if(this.$route.params.id){
        var res = await service.get(this.form.id)
        this.form = {
            name: res.name,
            email: res.email,
            phone: res.phone,
            quantity: res.quantity,
            description: res.description,
            condition: res.condition,
            id: this.$route.params.id,
        }
        let formData = new FormData()
        formData.append('is_new',0)
        service.update(formData, this.$route.params.id)
    }
  },
};
</script>
