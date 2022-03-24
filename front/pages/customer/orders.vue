<template>
      <b-container class="my-account">
        <b-row>
           <b-col md="3"><AccountSidebar /></b-col>
           <b-col md="9">
            <b-table hover :fields="fields" :items="items">
              <template #cell(id)="data">
                {{ data.item.id }}
              </template>
                 <template #cell(email)="data">
                {{ data.item.billing_email }}
              </template>
                <template #cell(date)="data">
                {{ data.item.created_date_formatted_us }}
              </template> 
                 <template #cell(bill_to)="data">
                {{ data.item.billing_first_name }}  {{ data.item.billing_last_name }}
              </template>
                 <template #cell(ship_to)="data">
                {{ data.item.shipping_first_name }}  {{ data.item.shipping_last_name }}
              </template>
                    <template #cell(total)="data">
                {{ data.item.total }}
              </template>
              <template #cell(status)="data">
                <OrderStatus :order_status="data.item.order_status" />
              </template>
              <template #cell(action)="data">
                  <nuxt-link class="btn btn-primary btn-sm" :to="'/order/thankyou/'+data.item.id">View</nuxt-link>
              </template>
            </b-table>
              <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="items"
              first-text="First"
              prev-text="Prev"
              next-text="Next"
              last-text="Last"
              ></b-pagination>
          </b-col>
        </b-row>
    </b-container>
</template>
<script>
import OrderStatus from "@/components/OrderStatus.vue";
export default {
    components: {
    OrderStatus,
  },
  data() {
    return {
    perPage: 5,
    currentPage: 1,
    rows:'',
    to:'',
    options: {},
    items :[],
     fields: [  
      { key: 'id', label: 'id'},
      { key: 'email', label: 'Billing Email'},
      { key: 'date', label: 'Order Date'},
      { key: 'bill_to', label: 'Bill To'},
      { key: 'ship_to', label: 'Ship To'},
      { key: 'total', label: 'Total'},
      { key: 'status', label: 'Status'},
      { key: 'action', label: 'Action'},
   ],
    };
  },
   methods: {
    getAllOrders() {
      let query = "?page=" + this.currentPage;
          query += '&perPage='+this.perPage;
      this.$axios.get("orders/all"+query).then((response) => {
      let res = response.data.data;
      this.items = res.data;
      this.rows = res.total;
      });
    },
  },
  mounted() {
    this.getAllOrders();
  },
    watch: {
    currentPage: {
      handler: function(value) {
        this.getAllOrders()
      }
    }
    }
};
</script>