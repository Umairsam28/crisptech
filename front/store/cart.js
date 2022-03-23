import swal from "sweetalert"
export const state = () => ({
    items: [],
    subtotal: 0,
    total: 0,
    discount_amount: 0,
    couponloader: false,
    couponApplied: false,
    coupon: {},
})

export const mutations = {
    initialize(state) {
        state.items = []
        state.total = 0
        state.subtotal = 0
        if(localStorage.getItem('cart')){
            let cart = JSON.parse(localStorage.getItem('cart'))
            let total = 0
            for(let i = 0; i < cart.length; i++){
                total += (cart[i].product.actual_price*cart[i].quantity)
                state.items.push(cart[i])
            }
            state.subtotal = total
            state.total = total
        }
    },
    add(state, {item, quantity, redirect}){
        let cart_index = 0;
        let index = state.items.findIndex((v, k)=>{
            if(v.product.id==item.id){
                cart_index = k
                return true
            }
        })
        if(index<0){
            state.items.push({
                product: item,
                quantity: quantity
            });
        }else{
            state.items[cart_index] = {
                product: item,
                quantity: quantity
            };
        }
        localStorage.setItem('cart',JSON.stringify(state.items))
        let total = 0
        let cart = state.items
        for(let q = 0; q < cart.length; q++){
            total += (cart[q].product.actual_price*cart[q].quantity)
        }
        state.subtotal = total
        state.total = total
        if(redirect==true){
            this.$router.push('/cart')
        }
    },
    qtyChange(state, {type, index}){
        let current_qty = state.items[index].quantity
        if(type=='add'){
            state.items[index].quantity++
        }else{
            if(current_qty>1){
                state.items[index].quantity--
            }
        }
        localStorage.setItem('cart',JSON.stringify(state.items))
        let total = 0
        let cart = state.items
        for(let q = 0; q < cart.length; q++){
            total += (cart[q].product.actual_price*cart[q].quantity)
        }
        state.subtotal = total
        state.total = total
    },
    remove(state, {index}){
        state.items.splice(index,1)
        localStorage.setItem('cart',JSON.stringify(state.items))
        let total = 0
        let cart = state.items
        for(let q = 0; q < cart.length; q++){
            total += (cart[q].product.actual_price*cart[q].quantity)
        }
        state.subtotal = total
        state.total = total
    },
    update_quantity(state,data){
        state.items[data.index].quantity = data.quantity;
        localStorage.setItem('cart',JSON.stringify(state.items))
        let total = 0
        let cart = state.items
        for(let q = 0; q < cart.length; q++){
            total += (cart[q].product.actual_price*cart[q].quantity)
        }
        state.subtotal = total
        state.total = total
    },
    tglCouponloader(state){
        state.couponloader = !state.couponloader
    },
    tglCouponApplied(state){
        state.couponApplied = !state.couponApplied
    },
    setCoupon(state, obj){
        state.coupon = obj
    },
    calculateTotal(state){
        let total = 0
        let cart = state.items
        for(let q = 0; q < cart.length; q++){
            total += (cart[q].product.actual_price*cart[q].quantity)
        }
        //total have sub total value inside it, adding discount now
        let discount = 0
        if(state.couponApplied==true){
            if(state.coupon.discount_type==0){
                //percent
                discount = parseFloat(((total/100)*parseFloat(state.coupon.discount)))
            }else{
                //amount
                if(total>state.coupon.discount){
                    discount = parseFloat(state.coupon.discount)
                }
            }
        }
        state.subtotal = total
        state.discount_amount = discount
        state.total = (total-discount)
    }
}
export const actions = {
    async checkCoupon({commit}, {code}){
        commit('tglCouponloader')
        let res = await this.$axios.post('coupon',{
            code: code
        }).then(function(e){
            return {status: 1, data: e.data}
        }).catch(function(e){
            return {status: 0, data:'Your Coupon Code is Invalid'}
            // return {status: 0, data: e.response.data.errors};
        })
        if(!res.status){
            swal("Sorry", res.data, "error");
        }else{
            commit('tglCouponApplied')
            commit('setCoupon', res.data)
            commit('calculateTotal')
            swal("Congratulations", "Coupon Applied", "success");
        }
        commit('tglCouponloader')
    }
}