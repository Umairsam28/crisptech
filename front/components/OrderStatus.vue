<template>
  <div class="d-inline">
     <b-badge class="p-2" pill :variant="statuses[order_status].color">{{statuses[order_status].name}}</b-badge>
  </div>
</template>
<script>
export default {
  props: {
    order_status: { 
      type: Number,
      default: 1,
    },
  },
  data(){
      return{
          statuses:{
              1: {color: 'primary', name:'Pending'},
              2: {color: 'secondary', name:'Processing'},
              3: {color: 'info', name:'Holded'},
              4: {color: 'danger', name:'Canceled'},
              5: {color: 'success', name:'Completed/Delivered'},
          }
      }
  }
};
</script>