const express = require("express");
const connect = require("./configs/db");

const brandController = require("./controllers/brand.controller");
const categoryController = require("./controllers/category.controller");
const sizeController = require("./controllers/size.controller");
const productController = require("./controllers/product.controller");


const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use("/brands", brandController);
app.use("/categories", categoryController);
app.use("/sizes", sizeController);
app.use("/products", productController);


app.listen(2809, async () => {
    await connect ();
    console.log("Listening to port 2809");
})