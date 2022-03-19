export const state = () => ({
    errors: {
        shipping_email: [],
        shipping_notes: [],
        shipping_first_name: [],
        shipping_last_name: [],
        shipping_address: [],
        shipping_city: [],
        shipping_zip: [],
        shipping_phone: [],
        shipping_company: [],
        shipping_country: [],
        shipping_state: [],
        billing_email: [],
        billing_first_name: [],
        billing_last_name: [],
        billing_address: [],
        billing_city: [],
        billing_zipcode: [],
        billing_phone: [],
        billing_company: [],
        billing_city: [],
        billing_country: [],
        billing_state: [],
    },
    form: {
        shipping_email: '',
        shipping_notes: '',
        shipping_first_name: '',
        shipping_last_name: '',
        shipping_address: '',
        shipping_city: '',
        shipping_zip: '',
        shipping_phone: '',
        shipping_company: '',
        shipping_country: '',
        shipping_state: '',
        billing_email: '',
        billing_first_name: '',
        billing_last_name: '',
        billing_address: '',
        billing_city: '',
        billing_zipcode: '',
        billing_phone: '',
        billing_company: '',
        billing_city: '',
        billing_country: '',
        billing_state: '',
    },
    formloading: false
})

export const mutations = {
    tglloader(state){
        state.formloading = !state.formloading
    },
    setErrors(state, res){
        if(res.data.shipping_email){
            state.errors.shipping_email = res.data.shipping_email
        }
        if(res.data.shipping_notes){
            state.errors.shipping_notes = res.data.shipping_notes
        }
        if(res.data.shipping_first_name){
            state.errors.shipping_first_name = res.data.shipping_first_name
        }
        if(res.data.shipping_last_name){
            state.errors.shipping_last_name = res.data.shipping_last_name
        }
        if(res.data.shipping_address){
            state.errors.shipping_address = res.data.shipping_address
        }
        if(res.data.shipping_city){
            state.errors.shipping_city = res.data.shipping_city
        }
        if(res.data.shipping_zip){
            state.errors.shipping_zip = res.data.shipping_zip
        }
        if(res.data.shipping_phone){
            state.errors.shipping_phone = res.data.shipping_phone
        }
        if(res.data.shipping_state){
            state.errors.shipping_state = res.data.shipping_state
        }
        if(res.data.shipping_country){
            state.errors.shipping_country = res.data.shipping_country
        }
        if(res.data.shipping_company){
            state.errors.shipping_company = res.data.shipping_company
        }
        if(res.data.billing_email){
            state.errors.billing_email = res.data.billing_email
        }
        if(res.data.billing_first_name){
            state.errors.billing_first_name = res.data.billing_first_name
        }
        if(res.data.billing_last_name){
            state.errors.billing_last_name = res.data.billing_last_name
        }
        if(res.data.billing_address){
            state.errors.billing_address = res.data.billing_address
        }
        if(res.data.billing_city){
            state.errors.billing_city = res.data.billing_city
        }
        if(res.data.billing_zipcode){
            state.errors.billing_zipcode = res.data.billing_zipcode
        }
        if(res.data.billing_phone){
            state.errors.billing_phone = res.data.billing_phone
        }
        if(res.data.billing_company){
            state.errors.billing_company = res.data.billing_company
        }
        if(res.data.billing_city){
            state.errors.billing_city = res.data.billing_city
        }
        if(res.data.billing_country){
            state.errors.billing_country = res.data.billing_country
        }
        if(res.data.billing_state){
            state.errors.billing_state = res.data.billing_state
        }
    },
    resetErrors(state){
        state.errors= {
            shipping_email: [],
            shipping_notes: [],
            shipping_first_name: [],
            shipping_last_name: [],
            shipping_address: [],
            shipping_city: [],
            shipping_zip: [],
            shipping_phone: [],
            shipping_state: [],
            shipping_country: [],
            shipping_company: [],

            billing_email: [],
            billing_first_name: [],
            billing_last_name: [],
            billing_address: [],
            billing_city: [],
            billing_zipcode: [],
            billing_phone: [],
            billing_company: [],
            billing_city: [],
            billing_country: [],
            billing_state: [],
        }
    },
    resetForm(state){
        state.form = {
            shipping_email: '',
            shipping_notes: '',
            shipping_first_name: '',
            shipping_last_name: '',
            shipping_address: '',
            shipping_city: 0,
            shipping_zip: '',
            shipping_phone: '',
            shipping_state: 0,
            shipping_country: 0,
            shipping_company: '',

            billing_email: '',
            billing_first_name: '',
            billing_last_name: '',
            billing_address: '',
            billing_city: 0,
            billing_zipcode: '',
            billing_phone: '',
            billing_company: '',
            billing_city: 0,
            billing_country: 0,
            billing_state: '',
        }
    },
    set_shipping_email(state, shipping_email){
        state.form.shipping_email = shipping_email
    },
    set_shipping_notes(state, shipping_notes){
        state.form.shipping_notes = shipping_notes
    },
    set_shipping_first_name(state, shipping_first_name){
        state.form.shipping_first_name = shipping_first_name
    },
    set_shipping_last_name(state, shipping_last_name){
        state.form.shipping_last_name = shipping_last_name
    },
    set_shipping_address(state, shipping_address){
        state.form.shipping_address = shipping_address
    },
    set_shipping_city(state, shipping_city){
        state.form.shipping_city = shipping_city
    },
    set_shipping_zip(state, shipping_zip){
        state.form.shipping_zip = shipping_zip
    },
    set_shipping_phone(state, shipping_phone){
        state.form.shipping_phone = shipping_phone
    },
    set_shipping_state(state, shipping_state){
        state.form.shipping_state = shipping_state
    },
    set_shipping_country(state, shipping_country){
        state.form.shipping_country = shipping_country
    },
    set_shipping_company(state, shipping_company){
        state.form.shipping_company = shipping_company
    },

    set_billing_email(state, billing_email){
        state.form.billing_email = billing_email
    },
    set_billing_first_name(state, billing_first_name){
        state.form.billing_first_name = billing_first_name
    },
    set_billing_last_name(state, billing_last_name){
        state.form.billing_last_name = billing_last_name
    },
    set_billing_address(state, billing_address){
        state.form.billing_address = billing_address
    },
    set_billing_city(state, billing_city){
        state.form.billing_city = billing_city
    },
    set_billing_zipcode(state, billing_zipcode){
        state.form.billing_zipcode = billing_zipcode
    },
    set_billing_phone(state, billing_phone){
        state.form.billing_phone = billing_phone
    },
    set_billing_state(state, billing_state){
        state.form.billing_state = billing_state
    },
    set_billing_country(state, billing_country){
        state.form.billing_country = billing_country
    },
    set_billing_company(state, billing_company){
        state.form.billing_company = billing_company
    },
    
}
export const actions = {
    async save({ commit, state }, {items}) {
        commit('tglloader')//setting loader to true
        commit('resetErrors')
        let formData = state.form
        formData.items = items
        let res = await this.$axios.post('orders',formData).then(function(e){
            return {status: 1, data: e.data.data}
        }).catch(function(e){
            return {status: 0, data: e.response.data.errors};
        })
        if(!res.status){
            commit('setErrors',res)
        }else{
            commit('resetForm')
            this.$router.push('/order/thankyou/'+res.data.id)
        }
        commit('tglloader')//setting loader to true
    }
}