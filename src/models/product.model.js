const mongoose = require("mongoose");

// Create Product Schema
const productSchema = new mongoose.Schema({
    product_name: {type: String, required: true},
    brand: {type: mongoose.Schema.Types.ObjectId, ref:"brand", required: true},
    price: {type: Number, required: true},
    product_quantity: {type: Number, required: true},
    gender: {type: String, required: false},
    sizes: [{type:mongoose.Schema.Types.ObjectId, ref: "size", required: true}],
    category: {type: mongoose.Schema.Types.ObjectId, ref: "category", required: true},
    product_image: [{type: String, required: false}],
    product_detail: [{type: String, required: false}],
    offer: {type: String, required:false}
    },
    {
        versionKey: false,
        timestamps: true
})

// Connect the Product schema to collections
const Products = mongoose.model("product", productSchema);

module.exports = Products;