const mongoose = require("mongoose");

const connect = () =>{
    return mongoose.connect("mongodb+srv://gourav:straw_berry_net@cluster0.aaoit.mongodb.net/strawberrynet?retryWrites=true&w=majority")
}

module.exports = connect
