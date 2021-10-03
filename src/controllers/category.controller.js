const express = require("express");

const Category = require("../models/category.model");

const router = express.Router();

//......APIs for category........//
// post:- Create a category
router.post("", async (req, res) => {
    const category = await Category.create(req.body);

    return res.status(201).send({category});
})


// get:- get all the categorys details
router.get("", async (req, res) => {
    const category = await Category.find().lean().exec();

    return res.status(200).send({category});
})

module.exports = router