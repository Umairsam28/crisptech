<template>

</template>
<script>
export default {
  data() {
    return {
      
    };
  },
  mounted() {
  },
  watch: {},
  methods: {
    
  },
  components:{
  },
  computed: {
    user() {
        return this.$store.getters.loggedInUser;
    },
  },
};
</script>