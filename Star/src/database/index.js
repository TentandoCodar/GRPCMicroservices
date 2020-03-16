import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/grpc', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connect");
}).catch((err) => {
    console.log(err)
})