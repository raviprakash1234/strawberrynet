const mongoose = require("mongoose");

// Create Brand Schema
const brandSchema = new mongoose.Schema({
    brand_name: {type: String, required: true}
    },
    {
        versionKey: false,
        timestamps: true
})

// Connect the Brand schema to collections
const Brand = mongoose.model("brand", brandSchema);

module.exports = Brand;