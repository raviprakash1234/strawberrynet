const express = require("express");

const Cart = require("../models/cart.model");

const router = express.Router();

//......APIs for Brand........//
// post:-
router.post("/:id", async (req, res) => {
    const cart = await Cart.create(req.params.id);

    return res.status(201).send({ cart });
})

// // get:- 
// router.get("/cart", async (req, res) => {
//     const cart = await Cart.find().lean().exec();

//     return res.render('cart.ejs', {
//         cart: cart,
//     })
// })


// // get:- 
// router.get("/checkout", async (req, res) => {
//     const cart = await Cart.find().lean().exec();

//     return res.render('checkout.ejs', {
//         checkout: checkout,
//     })
// })

module.exports = router