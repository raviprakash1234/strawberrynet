const mongoose = require("mongoose")

//1 user schema
const usersSchema = new mongoose.Schema({
    first_name:{type:String, required:true},
    last_name:{type:String, required:true},
    email:{type:String,required:true},
    password:{type:Number, required:true}
    
    
})

const User = mongoose.model("user",usersSchema)



module.exports = User