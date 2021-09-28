const mongoose = require("mongoose")

module.exports= ()=>{
    return mongoose.connect("mongodb+srv://ravi:strawberry@cluster0.tfpfi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}