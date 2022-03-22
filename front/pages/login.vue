<template>
  <div class="login-sec">
    <!-- <nuxt-link to="/">Home</nuxt-link> -->
    <div class="user-form">
      <b-container>
        <div class="content-container">
        <h2 class="sec-heading">CUSTOMER LOGIN</h2>

        <b-row>
          <b-col md="6">
            <h5>Registered Customers</h5>
            <p>If you have an account, sign in with your email address.</p>
            <b-form @submit="onSubmit">
              <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  placeholder="Enter email"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Password:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.password"
                  type="password"
                  placeholder="Enter password"
                  required
                ></b-form-input>
              </b-form-group>

              <b-button type="submit" class="blue-btn">Sign In</b-button>
              
            </b-form>
          </b-col>
          <b-col md="6">
            <h5>New Customers</h5>
            <p>
              Creating an account has many benefits: check out faster, keep more
              than one address, track orders and more.
            </p>
            <nuxt-link to="/register" class="blue-btn">Create an account</nuxt-link>
          </b-col>
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
       email:'',
       password: '',
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$store.dispatch('tryLogin',this.form)
    },
   
  },
};
</script>