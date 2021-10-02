const mongoose = require("mongoose")

module.exports= ()=>{
    return mongoose.connect(" mongodb+srv://gourav:straw_berry_net@cluster0.aaoit.mongodb.net/strawberrynet?retryWrites=true&w=majority")
}