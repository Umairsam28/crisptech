<template>
  <b-container class="my-account">
    <b-row>
      <b-col md="3"><AccountSidebar /></b-col>
      <b-col md="9">
        <h1>My Account</h1>
        <b-row>
          <b-col
            md="12"
            v-if="success.status == true"
            class="alert alert-success col-md-12"
          >
            {{ success.message }}
          </b-col>
        </b-row>
        <b-form @submit="onSubmit">
          <b-row no-gutters>
            <b-col>
              <b-form-group
                id="input-group-2"
                label="First Name:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  placeholder="First name"
                  required
                  v-model="customer.fname"
                ></b-form-input>
              </b-form-group>
            </b-col>
            &nbsp;&nbsp;
            <b-col>
              <b-form-group
                id="input-group-3"
                label="Last Name:"
                label-for="input-3"
              >
                <b-form-input
                  id="input-3"
                  placeholder="Last name"
                  v-model="customer.lname"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row no-gutters>
            <b-col>
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
                  v-model="customer.email"
                ></b-form-input>
                <b-form-invalid-feedback
                  :force-show="true"
                  id="input-1-live-feedback"
                  v-if="errors.email.length > 0"
                  >{{ errors.email }}</b-form-invalid-feedback
                >
              </b-form-group>
            </b-col>
          </b-row>
          <b-row no-gutters>
            <b-col>
              <b-form-group
                id="input-group-4"
                label="Password:"
                label-for="input-4"
              >
                <b-form-input
                  id="input-4"
                  placeholder="Password"
                  v-model="customer.password"
                ></b-form-input>
                <b-form-invalid-feedback
                  :force-show="true"
                  id="input-1-live-feedback"
                  v-if="errors.password.length > 0"
                  >{{ errors.password }}</b-form-invalid-feedback
                >
              </b-form-group>
            </b-col>
          </b-row>

          <b-button type="submit" class="submit" variant="primary"
            >Submit</b-button
          >
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      customer: {
        id: "",
        fname: "",
        lname: "",
        email: "",
        password: "",
      },
      errors: {
        email: [],
        password: [],
      },
      success: {
        status: false,
        message: "",
      },
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      var formdata = new FormData();
      formdata.append("id", this.customer.id);
      formdata.append("first_name", this.customer.fname);
      formdata.append("last_name", this.customer.lname);
      formdata.append("email", this.customer.email);
      if (this.customer.password != "") {
        formdata.append("password", this.customer.password);
      }
      formdata.append("_method", "put");
      var res = await this.$axios
        .post("/updateprofile", formdata)
        .then(function (r) {
          return { status: 1, data: r.data };
        })
        .catch(function (e) {
          return { status: 0, data: e.response.data.errors };
        });
      if (res.status == 0) {
        if (res.data.email) {
          this.errors.email = res.data.email[0];
        }
        if (res.response.data.errors.password) {
          this.errors.password = res.data.password[0];
        }
      } else {
        this.success.status = true;
        this.success.message = "Profile updated successfully.";
      }
    },
    getCustomerDetails() {
      this.$axios.get("/customer/edit").then((resp) => {
        this.customer.id = resp.data.id;
        this.customer.fname = resp.data.first_name;
        this.customer.lname = resp.data.last_name;
        this.customer.email = resp.data.email;
      });
    },
  },
  mounted() {
    this.getCustomerDetails();
  },
};
</script>