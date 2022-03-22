<template>
  <b-modal id="modal-1" title="Request For Quote" hide-footer>
    <h2>Call <a href="tel:8323440072">(832) 344-0072</a> for further assistance.</h2>
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label-for="input-1" >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Email"
          required
        ></b-form-input>
        <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback">{{ errors.email[0] }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Name"
          required
        ></b-form-input>
        <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback">{{ errors.name[0] }}</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="input-group-3" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.phone"
          placeholder="Phone Number"
          required
        ></b-form-input>
        <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback">{{ errors.phone[0] }}</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="input-group-4" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.quantity"
          type="number"
          min="0"
          placeholder="Quantity"
          required
        ></b-form-input>
        <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback">{{ errors.quantity[0] }}</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="input-group-5" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.condition"
          placeholder="Condition"
        ></b-form-input>
        <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback">{{ errors.condition[0] }}</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="input-group-6" label-for="input-6">
        <b-form-input
          id="input-6"
          v-model="form.description"
          placeholder="Description"
        ></b-form-input>
        <b-form-invalid-feedback :force-show="true" id="input-1-live-feedback">{{ errors.description[0] }}</b-form-invalid-feedback>
      </b-form-group>
      <b-button v-if="!loading" :disabled="loading" type="submit" variant="primary">Submit</b-button>
      <b-spinner v-else type="grow" label="Loading..."></b-spinner>
    </b-form>
  </b-modal>
</template>
<script>
import swal from 'sweetalert';
export default {
  data(){
    return{
      form: {
        name: '',
        email: '',
        phone: '',
        quantity: 1,
        condition :'',
        description : '',
      },
      errors:{
        name: [],
        email: [],
        phone: [],
        quantity:[],
        condition :[],
        description : [],
      },
      loading: false,
    }
  },
  methods:{
    async onSubmit(event){
      this.resetError()
      if(!this.loading){
        event.preventDefault()
        this.loading=true
        let res = await this.$axios.post('quote-form',this.form).then(function(e){
            return {status: 1, data: e.data.data}
        }).catch(function(e){
            return {status: 0, data: e.response.data.errors};
        })
        if(!res.status){
          if(res.data.name){
            this.errors.name = res.data.name
          }
          if(res.data.email){
            this.errors.email = res.data.email
          }
          if(res.data.phone){
            this.errors.phone = res.data.phone
          }
          if(res.data.quantity){
            this.errors.quantity = res.data.quantity
          }
          if(res.data.condition){
            this.errors.condition = res.data.condition
          }
          if(res.data.description){
            this.errors.description = res.data.description
          }
        }else{
          this.form = {
            name: '',
            email: '',
            phone: '',
            quantity: 1,
            condition :'',
            description : '',
          }
          this.$bvModal.hide('modal-1')
          swal("Thank you", "Your Inquiry has been submitted", "success");
        }
        this.loading = false
      }  
    },
    resetError(){
      this.errors ={
        name: [],
        email: [],
        phone: [],
        quantity:[],
        condition :[],
        description : [],
      }
    },
  }
}
</script>