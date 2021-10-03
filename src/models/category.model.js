const mongoose = require("mongoose");

// Create Category Schema
const categorySchema = new mongoose.Schema({
    category_name: {type: String, required: true}
    },
    {
        versionKey: false,
        timestamps: true
})

// Connect the Category schema to collections
const Category = mongoose.model("category", categorySchema);

module.exports = Category;