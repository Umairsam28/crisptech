<template>
  <div class="login-sec">
    <!-- <nuxt-link to="/">Home</nuxt-link> -->
    <div class="user-form">
      <b-container>
        <div class="content-container">
          <h2 class="sec-heading">CREATE NEW CUSTOMER ACCOUNT</h2>

          <b-row>
            <b-form class="w-100" @submit="onSubmit">
              <b-col md="12">
                <h5>Personal Information</h5>
                <b-row>
                  <b-col md="6">
                    <b-form-group
                      id="input-group-1"
                      label="First Name:"
                      label-for="input-1"
                    >
                      <b-form-input
                        id="input-1"
                        v-model="form.first_name"
                        type="text"
                        placeholder="First Name"
                        required
                      ></b-form-input>
                      <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback">{{ errors.first_name[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </b-col>
                  <b-col md="6">
                    <b-form-group
                      id="input-group-2"
                      label="Last Name:"
                      label-for="input-2"
                    >
                      <b-form-input
                        id="input-2"
                        v-model="form.last_name"
                        type="text"
                        placeholder="Last Name"
                        required
                      ></b-form-input>
                      <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback">{{ errors.last_name[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </b-col>
                </b-row>

                <h5>Sign-in Information</h5>
                <b-row>
                  <b-col md="6">
                    <b-form-group
                      id="input-group-3"
                      label="Email address:"
                      label-for="input-3"
                    >
                      <b-form-input
                        id="input-3"
                        v-model="form.email"
                        type="email"
                        placeholder="Email Address"
                        required
                      ></b-form-input>
                      <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback">{{ errors.email[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </b-col>
                  <b-col md="6">
                    <b-form-group
                      id="input-group-4"
                      label="Password:"
                      label-for="input-4"
                    >
                      <b-form-input
                        id="input-4"
                        v-model="form.password"
                        type="password"
                        placeholder="Password"
                        required
                      ></b-form-input>
                      <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback">{{ errors.password[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </b-col>
                  <b-col md="6">
                    <b-form-group
                      id="input-group-5"
                      label="Password:"
                      label-for="input-5"
                    >
                      <b-form-input
                        id="input-5"
                        v-model="form.password_confirmation"
                        type="password"
                        placeholder="Confirm password"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-button v-if="!loading" :disabled="loading" type="submit" class="blue-btn">CREATE AN ACCOUNT</b-button>
                <b-spinner v-else type="grow" label="Loading..."></b-spinner>
              </b-col>
            </b-form>
          </b-row>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      errors: {
        first_name: [],
        last_name: [],
        email: [],
        password: [],
        password_confirmation: [],
      },
      loading: false,
      show: true,
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      if(!this.loading){
        this.loading = true
        let res = await this.$axios.post('register',this.form).then(function(e){
            return {status: 1, data: e.data.data}
        }).catch(function(e){
            return {status: 0, data: e.response.data.errors};
        })
        if(!res.status){
          if(res.data.name){
            this.errors.name = res.data.name
          }
          if(res.data.first_name){
            this.errors.first_name = res.data.first_name
          }
          if(res.data.last_name){
            this.errors.last_name = res.data.last_name
          }
          if(res.data.email){
            this.errors.email = res.data.email
          }
          if(res.data.password){
            this.errors.password = res.data.password
          }
          if(res.data.password_confirmation){
            this.errors.password_confirmation = res.data.password_confirmation
          }
        }else{
          await this.$store.dispatch('tryLogin',{
            email: this.form.email,
            password: this.form.password,
          })
          this.form = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            password_confirmation: "",
          }
        }
        this.loading = false
      }
    },
    resetErrors(){
      this.errors = {
        first_name: [],
        last_name: [],
        email: [],
        password: [],
        password_confirmation: [],
      }
    }
  },
};
</script>