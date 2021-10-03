const express = require("express");
const connect = require("./configs/db");

const brandController = require("./controllers/brand.controller");
const categoryController = require("./controllers/category.controller");
const sizeController = require("./controllers/size.controller");
const productController = require("./controllers/product.controller");

const mongoose = require("mongoose");

// Create Cart Schema
const cartSchema = new mongoose.Schema({
    product: [{type: mongoose.Schema.Types.ObjectId, required: true}],
    user: [{type: mongoose.Schema.Types.ObjectId, required: false}]
    },
    {
        versionKey: false,
        timestamps: true
})

// Connect the Cart schema to collections
const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;


const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use("/brands", brandController);
app.use("/categories", categoryController);
app.use("/sizes", sizeController);
app.use("/products", productController);


// get:- 
app.get("/cart", async (req, res) => {
    const cart = await Cart.find().lean().exec();

    return res.render('cart.ejs', {
        cart: cart,
    })
})


// get:- 
app.get("/checkout", async (req, res) => {
    const checkout = await Cart.find().lean().exec();

    return res.render('checkout.ejs', {
        checkout: checkout,
    })
})

app.get("/thankyou", async (req, res) => {
    const checkout = await Cart.find().lean().exec();

    return res.render('thankyou.ejs', {
        checkout: checkout,
    })
})


app.listen(2809, async () => {
    await connect ();
    console.log("Listening to port 2809");
})