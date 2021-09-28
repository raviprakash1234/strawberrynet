const express = require("express");

const Brand = require("../models/brand.model");

const router = express.Router();

//......APIs for Brand........//
// post:- Create a brand
router.post("", async (req, res) => {
    const brand = await Brand.create(req.body);

    return res.status(201).send({brand});
})

// get:- get all the brands details
router.get("", async (req, res) => {
    const brand = await Brand.find().lean().exec();

    return res.status(200).send({brand});
})

module.exports = router