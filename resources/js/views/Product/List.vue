<template>
  <div>
    <v-row no-gutters>
      <v-breadcrumbs :items="bread">
        <template v-slot:divider>
          <v-icon>mdi-forward</v-icon>
        </template>
      </v-breadcrumbs>
    </v-row>
    <v-row class="justify-end">
      <v-btn
        small color="secondary"
        @click="isHidden ? (isHidden = false) : (isHidden = true)"
        >  <v-icon>mdi-filter</v-icon>Filter </v-btn>
    </v-row>

    <v-container v-if="isHidden">
        <v-card style="padding: 29px 27px;">
      <v-row class="inline d-flex">
        <v-text-field
          v-model="filter.name_sku"
          label="Product Name/ SKU"
          class="mx-4"
        ></v-text-field>
        <v-text-field
          v-model="filter.part_num"
          label="Part Number"
          class="mx-4"
        ></v-text-field>
        <v-select
        :items="['New','Refurbished']"
          label="Condition"
          item-text="name"
          v-model="filter.condition"
          item-value="id"
          dense
          class="mx-4 pt-5"
        ></v-select>
      </v-row>
      <v-row class="inline d-flex">
        <v-select
          :items="categories"
          label="Categories"
          item-text="name"
          item-value="id"
          v-model="filter.category"
          dense
          class="mx-4 pt-5"
        ></v-select>
        <v-select
          :items="brands"
          label="Brands"
          v-model="filter.brand"
          item-text="name"
          item-value="id"
          dense
          class="mx-4 pt-5"
        ></v-select>
        <v-btn elevation="1" color="primary" class="mt-5" raised v-on:click="applyFilter()"
          >Apply Filter</v-btn
        >
        <v-btn depressed  class="mt-5" raised v-on:click="resetFilter()">Reset</v-btn>
      </v-row>
        </v-card>
    </v-container>

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
      <template v-slot:item.actions="{ item }">
        <v-btn
          color="info"
          fab
          x-small
          dark
          :to="{ name: 'auth.products.edit', params: { id: item.id } }"
        >
          <v-icon>mdi-pencil-plus</v-icon>
        </v-btn>
        <v-btn color="error" fab x-small dark @click="deleteuser(item.id)">
          <v-icon>mdi-delete-outline</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import Swal from "sweetalert2";
import productservice from "@services/auth/product";
import categoryservice from "@services/auth/category";
import brandservice from "@services/auth/brand";
export default {
  name: "auth.products.listing",
  data() {
    return {
      filter: {
        name_sku: "",
        part_num: "",
        condition: "",
        category: "",
        brand: "",
      },
      isHidden: false,
      search: "",
      conditions: [],
      categories: [],
      brands: [],
      bread: [
        {
          text: "Dashboard",
          to: { name: "auth.dashboard" },
          disabled: false,
          exact: true,
        },
        {
          text: "Product",
          to: { name: "auth.products.listing" },
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
          text: "#",
          align: "start",
          sortable: true,
          value: "id",
        },
        {
          text: "Part#",
          align: "start",
          sortable: true,
          value: "part_number",
        },
        {
          text: "SKU",
          align: "start",
          sortable: true,
          value: "sku",
        },
        {
          text: "Condition",
          align: "start",
          sortable: true,
          value: "condition",
        },
        {
          text: "Name",
          align: "start",
          sortable: true,
          value: "name",
        },
        {
          text: "Sale Price",
          align: "start",
          sortable: true,
          value: "actual_price",
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

    brandservice.getlist("?sortCol=name&sortByDesc=0").then((e) => {
      this.brands = e.data;
    });
    categoryservice.getlist("?sortCol=name&sortByDesc=0").then((e) => {
      this.categories = e.data;
    });
  },
  methods: {
    deleteuser: async function (id) {
      const isConfirmed = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          return true;
        }
      });
      if (isConfirmed) {
        await productservice.delete({
          id: id,
        });
        Swal.fire("Deleted!", "Your record has been deleted.", "success");
        this.getDataFromApi();
      }
    },
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
      if (this.filter.name_sku != "") {
        query += "&name_sku=" + this.filter.name_sku;
      }
        if (this.filter.part_num != "") {
        query += "&part_num=" + this.filter.part_num;
      }
       if (this.filter.condition) {
        query += "&condition=" + this.filter.condition;
      }
        if (this.filter.brand != "") {
        query += "&brand=" + this.filter.brand;
      }
        if (this.filter.category != "") {
        query += "&category=" + this.filter.category;
      }
      return productservice.getlist(query);
    },
    applyFilter() {
        this.getDataFromApi();
    },
     resetFilter() {
        this.filter.name_sku = "",
        this.filter.part_num= "",
        this.filter.condition= "",
        this.filter.category= "",
        this.filter.brand= "",
        this.isHidden = false,
        this.getDataFromApi();
     }
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
