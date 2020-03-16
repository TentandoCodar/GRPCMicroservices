/*string id = 1;
string userId = 2;
string description = 3;
int32 value = 4;*/
import mongoose from 'mongoose';

const PurchaseSchema = mongoose.Schema({
    userId: String,
    title: String,
    value: Number
})

export default mongoose.model('Purchases', PurchaseSchema);