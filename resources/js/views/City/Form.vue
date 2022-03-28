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
    v-model="form.name"
    :rules="[rules.required]"
    :error-messages="errors.name"
    label="Name"
  ></v-text-field>
</v-col>
<v-col
  cols="6"
  sm="6"
  class="pb-0"
>
<v-select
    :items="states"
    item-text="name"
    item-value="id"
    label="State*"
    required
    v-model="form.state_id"
    :error-messages="errors.state_id"
></v-select>
</v-col>
 <v-col
  cols="12"
  sm="12"
  class="pb-0"
>
<v-btn
    color="secondary"
    elevation="1"
    large
    raised
    @click="addpermission(false)"
    :loading="btnloading"
    :disabled="btnloading"
  >{{form.id>0?'Update':'Add'}}</v-btn>

  <v-btn
    color="secondary"
    elevation="1"
    large
    raised
    @click="addpermission(true)"
    :loading="btnloading"
    :disabled="btnloading"
    v-if="form.id==0"
  >Add and Stay</v-btn>
</v-col>

</v-row>

</v-form>
</v-col>
</v-row>
  </div>
</template>

<script>
import defaultservice from "@services/auth/default";
const service = new defaultservice('cities')
const statesservice = new defaultservice('states')
export default {
  name: "auth.cities.add",
  async mounted(){
    statesservice.get('').then(e=>{
      this.states=e
    })
    if(this.$route.params.id){
        var res = await service.get(this.form.id)
        this.form = {
            name: res.name,
            state_id: res.state_id,
            id: this.$route.params.id,
        }
        this.bread.push({
          text: "Edit",
          to: { name: "auth.cities.edit", params: {id: this.$route.params.id} },
          disabled: false,
          exact: true,
        })
    }else{
        this.bread.push({
          text: "Add",
          to: { name: "auth.cities.add"},
          disabled: false,
          exact: true,
        })
    }
  },
  methods: {
    resetError(){
        this.errors = {
          name:[],
          state_id: [],
      }
    },
    addpermission: async function (stay = false) {
        this.resetError()
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        var formdata = new FormData();
        formdata.append("name", this.form.name);
        formdata.append("state_id", this.form.state_id);
        this.btnloading = false;
        if(this.form.id>0){
            var res = await service.update(formdata, this.form.id)
        }else{
            var res = await service.create(formdata)
        }
        if(!res.status){
            if(res.data.name){
                this.errors.name = res.data.name
            }
            if(res.data.state_id){
                this.errors.state_id = res.data.state_id
            }
            //errors here
        }else{
            //suuccess here
            if(stay==false){
                this.$router.push({ name: "auth.cities.listing" });
            }else{
                this.$store.commit("setNotification", "City Saved, You can now add more");
                this.form = {
                    state_id: 0,
                    name: '',
                    id: 0,
                }
            }
        }
      }
    },
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
          name: '',
          state_id: 0,
      },
      states: [],
      errors: {
          name:[],
          state_id: [],
      },
      bread: [
        {
          text: "Dashboard",
          to: { name: "auth.dashboard" },
          disabled: false,
          exact: true,
        },
        {
          text: "City",
          to: { name: "auth.cities.listing" },
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
};
</script>
