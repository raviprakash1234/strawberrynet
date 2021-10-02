const mongoose = require("mongoose")



const wishlistSchema = new mongoose.Schema({
    product_name: {type: String, required: true},
    price: {type: Number, required: true},
    product_quantity: {type: Number, required: true},
    gender: {type: String, required: false},
    image:{type:String, required:true}
},{
    versionKey:false,
    timestamps:true
})


//2 connect the schema to the 
const Wishlist = mongoose.model("wishlist", wishlistSchema)



module.exports = Wishlist