<template>
    <v-row>
      <v-col cols="4">
        <v-btn
          elevation="2"
          color="primary"
          @click="exportbrands"
        >Export Brands</v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn
          elevation="2"
          color="primary"
          @click="exportcategories"
        >Export Category</v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn
          elevation="2"
          color="primary"
          @click="exportproduct"
        >Export Product</v-btn>
      </v-col>
    </v-row>
</template>
<script>
import Swal from "sweetalert2";
const axios = require('axios');
export default {
  components: {
  },
  data(){
    return {
     
    }
  },
  methods:{
    exportbrands(){
      axios.get('api/export-brands').then(e=>{
        Swal.fire(
          'Export Report Submitted',
          'Brands Will be exported in a bit, you will be notified',
          'success'
        )
      })
    },
    exportcategories(){
      axios.get('api/export-categories').then(e=>{
        Swal.fire(
          'Export Report Submitted',
          'Categories Will be exported in a bit, you will be notified',
          'success'
        )
      })
    },
    exportproduct(){
      axios.get('api/export-products').then(e=>{
        Swal.fire(
          'Export Report Submitted',
          'Products Will be exported in a bit, you will be notified',
          'success'
        )
      })
    }
  },
  async mounted(){
    
  },
  computed: {
    user() {
      return this.$store.getters.loggedInUser;
    },
  },
};
</script>
