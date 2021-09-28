const mongoose = require("mongoose")



const brandSchema  = new mongoose.Schema({
    brand_name: {type: String, required: true},

},{
    versionKey:false,
    timestamps:true
})


const Brand = new mongoose.model("brand",brandSchema)



module.exports = Brand