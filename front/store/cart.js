export const state = () => ({
    items: [],
    total: 0,
})

export const mutations = {
    initialize(state) {
        state.items = []
        state.total = 0
        if(localStorage.getItem('cart')){
            let cart = JSON.parse(localStorage.getItem('cart'))
            let total = 0
            for(let i = 0; i < cart.length; i++){
                total += (cart[i].product.actual_price*cart[i].quantity)
                state.items.push(cart[i])
            }
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
        state.total = total
    }
}
export const actions = {

}