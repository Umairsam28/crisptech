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
  cols="12"
  sm="12"
  class="pb-0"
>
  <v-text-field
    :value="form.email"
    label="Email"
    readonly
  ></v-text-field>
</v-col>

</v-row>

</v-form>
</v-col>
</v-row>
  </div>
</template>

<script>
import defaultservice from "@services/auth/default";
const service = new defaultservice('newsletters')
export default {
  name: "auth.newsletters.add",
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
      },
      bread: [
        {
          text: "Dashboard",
          to: { name: "auth.dashboard" },
          disabled: false,
          exact: true,
        },
        {
          text: "Newsletters",
          to: { name: "auth.newsletters.listing" },
          disabled: false,
          exact: true,
        },
        {
          text: "View",
          to: { name: "auth.newsletters.view", params: {id: this.$route.params.id} },
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
            email: res.email,
            id: this.$route.params.id,
        }
    }
  },
};
</script>
