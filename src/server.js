const express = require("express");
const connect = require("./configs/db");

const brandController = require("./controllers/brand.controller");
const productController = require("./controllers/product.controller");

const app = express();
app.use(express.json());

app.use("/brands", brandController);
app.use("/products", productController);

app.listen(2809, async () => {
    await connect ();
    console.log("Listening to port 2809");
})