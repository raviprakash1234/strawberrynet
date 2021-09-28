const express = require("express")

const connect = require("./configs/db") 





const userController = require("./controllers/user.controller")
const productController = require("./controllers/product.controller")
const brandController = require("./controllers/brand.controller")

const app = express()

app.use(express.json())



app.use("/user",userController)
app.use("/product",productController)
app.use("/brand",brandController)





app.listen(2022, async function(){
    await connect()
     console.log("listening a port 2022")
})

