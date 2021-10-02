const express = require("express")

const connect = require("./configs/db") 





const userController = require("./controllers/user.controller")
const wishlistController = require("./controllers/wishlist.controller")
const brandController = require("./controllers/brand.controller")

const app = express()

app.use(express.json())

app.set("view engine", "ejs")
app.use(express.static('public'))

app.use("/user",userController)
app.use("/all_wishlist",wishlistController)
app.use("/brand",brandController)





app.listen(2022, async function(){
    await connect()
     console.log("listening a port 2022")
})

