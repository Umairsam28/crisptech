<template>
    <v-row>
      
    </v-row>
</template>
<script>
export default {
  components: {
  },
  data(){
    return {
     
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
