<template>
  <div class="coupon">
    <div>
      <b-button v-b-toggle.my-collapse class="blue-btn"
        >Apply Discount Code <font-awesome-icon icon="fa-solid fa-angle-down"
      /></b-button>
    </div>

    <b-collapse id="my-collapse">
      <b-card>
        <b-form>
          <b-form-input
            id="input-1"
            v-model="code"
            type="text"
            placeholder="Enter Discount Code"
          ></b-form-input>
          <b-button type="submit" class="blue-btn">Apply Discount</b-button>
        </b-form>
      </b-card>
    </b-collapse>
  </div>
</template>
<script>
export default {
    data(){
        return{
            code: '',
        }
    }
}
</script>