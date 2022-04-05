const axios = require('axios');
class ordersservice{
    async updateQty(oid, item){
        var res = await  axios.post('/api/update-qty/'+item.id,item).then(function(e){
            return {status: 1, data: e.data.data}
        }).catch(function(e){
            return {status: 0, data: e.response.data.errors};
        });
        return res;
    }
    async getStripeIntentDetails(oid){
        return axios.get(`/api/order-stripedetails/${oid}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
    }
    async captureOrder(oid){
        return axios.get(`/api/capture-order/${oid}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
    }
    async voidOrder(oid){
        return axios.get(`/api/void-order/${oid}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
    }
}
export default new ordersservice();