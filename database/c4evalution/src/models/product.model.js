const mongoose = require("mongoose")



const productSchema = new mongoose.Schema({
    product_name: {type: String, required: true},
    brand: {type: mongoose.Schema.Types.ObjectId, ref:"brand", required: false},
    price: {type: Number, required: true},
    product_quantity: {type: Number, required: true},
    gender: {type: String, required: false},
    image:{type:String, required:true}
},{
    versionKey:false,
    timestamps:true
})


//2 connect the schema to the 
const Product = mongoose.model("product",productSchema)



module.exports = Product