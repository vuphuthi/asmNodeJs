import mongoose from "mongoose";
const productScheme = new mongoose.Schema({
    name:{
        type:String,
    },
    price:{
        type:Number
    }
})
export default mongoose.model('Product', productScheme)