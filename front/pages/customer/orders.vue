<template>
  <b-container class="my-account">
    <b-row>
      <b-col md="3"><AccountSidebar /></b-col>
      <b-col md="9">
        <b-table hover :fields="fields" :items="items">
      <template #cell(id)="data">
        {{ data.item.id }}
      </template>
       <template #cell(address)="data">
         {{ data.item.shipping_address }},{{ data.item.shipping_city }},
        {{ data.item.sstate.name }}
        ,{{ data.item.scountry.name }} 
      </template>

      <template #cell(date)="data">
        {{ data.item.created_date_formatted_us }}
      </template>
      <template #cell(action)="data">
          <b-button variant="light"> {{ data.item.id}}</b-button>
      </template>

        </b-table>
        <b-pagination
        class="justify-content-center"
        v-model="currentPage"
        :total-rows="items.length"
        :per-page="perPage"
        aria-controls="my-table"
        ></b-pagination>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
    perPage: 3,
    currentPage: 1,
    items :[],
     fields: [  
      { key: 'id', label: 'id'},
      { key: 'address', label: 'Shipping Address'},
      { key: 'date', label: 'Order Date'},
      { key: 'action', label: 'Action'},
   ],


    };
  },
   methods: {
    getAllOrders() {
     this.$axios.get("orders/all").then((response) => {
       console.log(response.data.data);
        this.items = response.data.data;
      });
    },
  },
  mounted() {
    this.getAllOrders();
  },
};
</script>