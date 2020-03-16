import Purchase from './models/Purchase';
export default {
    async getPurchaseById(call,callback) {
        const {id} = call.request;
        const purchase = await Purchase.findById(id);

        return callback(null, {purchase});
    },

    async ListAllPurchasesFromUser(call, callback) {
        const {userId} = call.request;
        const purchases = await Purchase.find({
            $where: {
                userId
            }
        })

        return callback(null, {purchases})
    },
    
    async purchase(call,callback) {
        const purchase = await Purchase.create(call.request);

        return callback(null, {purchase})
    }

}