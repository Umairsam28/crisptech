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
    v-model="first_name"
    :rules="[rules.required]"
    :error-messages="errors.first_name"
    label="First Name"
  ></v-text-field>
</v-col>

<v-col
  cols="6"
  sm="6"
  class="pb-0"
>
  <v-text-field
    v-model="last_name"
    :rules="[rules.required]"
    :error-messages="errors.last_name"
    label="Last Name"
  ></v-text-field>
</v-col>

<v-col
  cols="12"
  sm="12"
  class="pb-0"
>
  <v-text-field
    v-model="email"
    :rules="[rules.required]"
    :error-messages="errors.email"
    label="Email"
  ></v-text-field>
</v-col>

<v-col
  cols="12"
  sm="12"
  class="pb-0"
>
<v-select
    :items="roles"
    item-text="name"
    item-value="id"
    label="Role*"
    required
    v-model="role_id"
    :error-messages="errors.role_id"
></v-select>
</v-col>


<v-col
  cols="12"
  sm="12"
  class="pb-0"
>
  <v-text-field
    v-model="password"
    :rules="[rules.required]"
    :error-messages="errors.password"
    label="Password"
    type="password"
  ></v-text-field>
</v-col>

<v-col cols="12" cm="12" class="pb-0">
<v-file-input
    accept="image/*"
    v-model="image"
    :error-messages="errors.image"
    label="Image"
  ></v-file-input>
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
    @click="addbrand"
    :loading="btnloading"
    :disabled="btnloading"
  >Save</v-btn>
</v-col>

</v-row>

</v-form>
</v-col>
</v-row>
  </div>
</template>

<script>
import userervice from "@services/auth/user";
import rolesservice from "@services/auth/roles";
export default {
  name: "auth.users.add",
  mounted() {
    rolesservice.get("").then((e) => {
      this.roles = e;
    });
  },
  methods: {
    resetError() {
      this.errors = {
        first_name: [],
        last_name: [],
        email: [],
        password: [],
        role_id: [],
        image: [],
      };
    },
    addbrand: async function () {
      this.resetError();
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        var formdata = new FormData();
        formdata.append("first_name", this.first_name);
        formdata.append("last_name", this.last_name);
        
        formdata.append("email", this.email);
        formdata.append("password", this.password);
        formdata.append("role_id", this.role_id);
        if (this.image) {
          formdata.append("image", this.image);
        }
        this.btnloading = false;
        var res = await userervice.create(formdata);
        if (!res.status) {
          if(res.data.first_name){
            this.errors.first_name = res.data.first_name
          }
          if(res.data.last_name){
            this.errors.last_name = res.data.last_name
          }
          if (res.data.email) {
            this.errors.email = res.data.email;
          }
          if (res.data.password) {
            this.errors.password = res.data.password;
          }
          if (res.data.role_id) {
            this.errors.role_id = res.data.role_id;
          }
          if (res.data.image) {
            this.errors.image = res.data.image;
          }
          //errors here
        } else {
          //suuccess here
          this.$router.push({ name: "auth.users.listing" });
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
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      role_id: "",
      image: undefined,
      roles: [],
      errors: {
        first_name: [],
        last_name: [],
        email: [],
        password: [],
        role_id: [],
        image: [],
      },
      bread: [
        {
          text: "Dashboard",
          to: { name: "auth.dashboard" },
          disabled: false,
          exact: true,
        },
        {
          text: "User",
          to: { name: "auth.users.listing" },
          disabled: false,
          exact: true,
        },
        {
          text: "Add",
          to: { name: "auth.users.add" },
          disabled: false,
          exact: true,
        },
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
