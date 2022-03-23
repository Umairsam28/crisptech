<template>
  <b-container class="my-account">
    <b-row>
      <b-col md="3"><AccountSidebar /></b-col>
      <b-col md="9">
        <b-table hover :items="items"></b-table>
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
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" },
      ],
    };
  },
};
</script>