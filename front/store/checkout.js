export const state = () => ({
    errors: {
        shipping_email: [],
        shipping_notes: [],
        shipping_first_name: [],
        shipping_last_name: [],
        shipping_address: [],
        shipping_address_2: [],
        shipping_city: [],
        shipping_zip: [],
        shipping_phone: [],
        shipping_company: [],
        shipping_country: [],
        shipping_state: [],
    },
    form: {
        shipping_email: '',
        shipping_notes: '',
        shipping_first_name: '',
        shipping_last_name: '',
        shipping_address: '',
        shipping_address_2: '',
        shipping_city: '',
        shipping_zip: '',
        shipping_phone: '',
        shipping_company: '',
        shipping_country: '',
        shipping_state: '',
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
        if(res.data.shipping_address_2){
            state.errors.shipping_address_2 = res.data.shipping_address_2
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
    },
    resetErrors(state){
        state.errors= {
            shipping_email: [],
            shipping_notes: [],
            shipping_first_name: [],
            shipping_last_name: [],
            shipping_address: [],
            shipping_address_2: [],
            shipping_city: [],
            shipping_zip: [],
            shipping_phone: [],
            shipping_state: [],
            shipping_country: [],
            shipping_company: [],
        }
    },
    resetForm(state){
        state.form = {
            shipping_email: '',
            shipping_notes: '',
            shipping_first_name: '',
            shipping_last_name: '',
            shipping_address: '',
            shipping_address_2: '',
            shipping_city: '',
            shipping_zip: '',
            shipping_phone: '',
            shipping_state: '',
            shipping_country: '',
            shipping_company: '',
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
    set_shipping_address_2(state, shipping_address_2){
        state.form.shipping_address_2 = shipping_address_2
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