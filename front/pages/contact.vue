<template>
  <div class="login-sec">
    <!-- <nuxt-link to="/">Home</nuxt-link> -->
    <div class="user-form">
      <b-container>
        <div class="content-container">
        <h2 class="sec-heading">CONTACT US</h2>

        <b-row>
          <b-col md="6">
            <h5>Write Us</h5>
            <p>Jot us a note and we’ll get back to you as quickly as possible.</p>
            <b-form @submit="onSubmit">
            <b-form-group
                id="contact-group-1"
                label="Name *"
                label-for="contact-1"
              >
                <b-form-input
                  id="contact-1"
                  v-model="form.name"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="contact-group-2"
                label="Email *"
                label-for="contact-2"
              >
                <b-form-input
                  id="contact-2"
                  v-model="form.email"
                  type="email"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="contact-group-3"
                label="Phone Number"
                label-for="contact-3"
              >
                <b-form-input
                  id="contact-3"
                  v-model="form.phone"
                  type="text"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="contact-group-4"
                label="What’s on your mind? *"
                label-for="contact-4"
              >
                <b-form-textarea
                    id="contact-4"
                    v-model="form.description"
                    rows="3"
                    required
                    max-rows="6"
                ></b-form-textarea>
              </b-form-group>
              <b-button type="submit" class="blue-btn">Submit</b-button>
              
            </b-form>
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
       name: '',
       phone: '',
       description: '',
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {

    },
  },
};
</script>