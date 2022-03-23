<template>
  <b-container class="my-account">
    
    <b-row>
      <b-col md="3"><AccountSidebar /></b-col>
      <b-col md="9">
            <h1>My Account</h1>
        <b-form @submit="onSubmit">
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              type="email"
              placeholder="Enter email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Your Name:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              placeholder="Enter name"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Food:" label-for="input-3">
            <b-form-input
              id="input-1"
              type="email"
              placeholder="Enter email"
              required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" class="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-col>
    </b-row>
    
  </b-container>
</template>
<script>
export default {
    methods:{
        onSubmit(event){
            event.preventDefault()
        }
    }
}
</script>