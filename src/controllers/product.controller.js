const express = require("express");

const Product = require("../models/product.model");

const router = express.Router();

//......APIs for Product........//
// post:- Create a product
router.post("", async (req, res) => {
    const product = await Product.create(req.body);

    return res.status(201).send({product});
})

// get:- get all the products details
router.get("", async (req, res) => {
    const products = await Product.find().lean().exec();

    return res.status(200).send({products});
})

module.exports = router