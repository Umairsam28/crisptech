<template>
  <div>
    <v-row no-gutters>
      <v-breadcrumbs :items="bread">
        <template v-slot:divider>
          <v-icon>mdi-forward</v-icon>
        </template>
      </v-breadcrumbs>
    </v-row>
    <v-data-table
      :headers="headers"
      :items="items"
      :options.sync="options"
      :server-items-length="totalRecords"
      :loading="loading"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search"
          class="mx-4"
        ></v-text-field>
      </template>
      <template v-slot:item.shipping_first_name="{ item }">
        {{item.shipping_first_name}} {{item.shipping_last_name}}
      </template>
      <template v-slot:item.total="{ item }">
        $ {{item.total}}
      </template>
      <template v-slot:item.shipping_address="{ item }">
        <address>
            {{item.shipping_address}} <br>
            {{item.shipping_city}}, {{item.shipping_state}} {{item.shipping_zip}}<br>
            {{item.shipping_country}}
        </address>
      </template>
      <template v-slot:item.order_status="{ item }">
        <OrderStatus :order_status="item.order_status" />
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn
          v-if="permissions.indexOf(160)>=0"
          color="info"
          fab
          x-small
          dark
          :to="{ name: 'auth.orders.view', params: { id: item.id } }"
        >
          <v-icon>mdi-eye-outline</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import Swal from "sweetalert2";
import defaultservice from "@services/auth/default";
import OrderStatus from "@/components/orders/status.vue";
const service = new defaultservice('orders')
export default {
  name: "auth.orders.listing",
  components:{
    OrderStatus
  },
  computed:{
    permissions(){
        return this.$store.getters.getPermissions
    }
  },
  data() {
    return {
      search: "",
      bread: [
        {
          text: "Dashboard",
          to: { name: "auth.dashboard" },
          disabled: false,
          exact: true,
        },
        {
          text: "Orders",
          to: { name: "auth.orders.listing" },
          disabled: false,
          exact: true,
        },
      ],
      items: [],
      loading: true,
      totalRecords: 0,
      options: {},
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: true,
          value: "id",
        },
        {
          text: "Email",
          align: "start",
          sortable: true,
          value: "shipping_email",
        },
        {
          text: "Full Name",
          align: "start",
          sortable: true,
          value: "shipping_first_name",
        },
        {
          text: "Phone",
          align: "start",
          sortable: true,
          value: "shipping_phone",
        },
        {
          text: "Full Address",
          align: "start",
          sortable: true,
          value: "shipping_address",
        },
        {
          text: "Total",
          align: "start",
          sortable: true,
          value: "total",
        },
        {
          text: "Status",
          align: "start",
          sortable: true,
          value: "order_status",
        },        
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  watch: {
    $route() {
      this.getDataFromApi();
    },
    perpage() {
      this.getDataFromApi();
    },
    options: {
      handler() {
        this.getDataFromApi();
      },
      deep: true,
    },
  },
  mounted() {
    this.getDataFromApi();
  },
  methods: {
    async getDataFromApi() {
      var data = await this.fakeApiCall();
      this.items = data.data;
      try {
        this.totalRecords = data.meta.total;
      } catch (ex) {
        //this.totalRecords=0
      }
      this.loading = false;
    },
    fakeApiCall() {
      this.loading = true;
      // this.items = []
      var query = "";
      var page = this.options.page;
      query += "?page=" + page;
      if (this.options.sortBy.length > 0) {
        query += "&sortCol=" + this.options.sortBy[0];
      }
      if (this.options.sortDesc.length > 0) {
        //if 1 then by desc else asc
        query += "&sortByDesc=" + (this.options.sortDesc[0] == true ? 1 : 0);
      }
      query += "&perpage=" + this.options.itemsPerPage;
      if (this.search != "") {
        query += "&search=" + this.search;
      }
      return service.getlist(query);
    },
  },
  watch: {
    options: {
      handler() {
        this.getDataFromApi();
      },
      deep: true,
    },
    search() {
      this.getDataFromApi();
    },
  },
};
</script>
