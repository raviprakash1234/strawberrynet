const mongoose = require("mongoose");

// Create size Schema
const sizeSchema = new mongoose.Schema({
    size_name: {type: String, required: true}
    },
    {
        versionKey: false,
        timestamps: true
})

// Connect the size schema to collections
const Size = mongoose.model("size", sizeSchema);

module.exports = Size;