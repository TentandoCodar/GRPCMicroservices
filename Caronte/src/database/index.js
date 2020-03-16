import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/grpc_purchases', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(resp => {
    console.log("Purchases db is connected");
}).catch((err) => {
    console.error(err);
})