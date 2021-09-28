const mongoose = require("mongoose");

// Create Product Schema
const productSchema = new mongoose.Schema({
    product_name: {type: String, required: true},
    brand: {type: mongoose.Schema.Types.ObjectId, ref:"brand", required: true},
    price: {type: Number, required: true},
    product_quantity: {type: Number, required: true},
    gender: {type: String, required: true},

    },
    {
        versionKey: false,
        timestamps: true
})

// Connect the Product schema to collections
const Products = mongoose.model("product", productSchema);

module.exports = Products;