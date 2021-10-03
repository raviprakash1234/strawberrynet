const mongoose = require("mongoose");

// Create Cart Schema
const cartSchema = new mongoose.Schema({
    product: [{type: mongoose.Schema.Types.ObjectId, required: true}],
    user: [{type: mongoose.Schema.Types.ObjectId, required: false}]
    },
    {
        versionKey: false,
        timestamps: true
})

// Connect the Cart schema to collections
const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;