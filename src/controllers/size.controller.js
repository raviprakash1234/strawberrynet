const express = require("express");

const Size = require("../models/size.model");

const router = express.Router();

//......APIs for size........//
// post:- Create a size
router.post("", async (req, res) => {
    const size = await Size.create(req.body);

    return res.status(201).send({size});
})

// get:- get all the sizes details
router.get("", async (req, res) => {
    const size = await Size.find().lean().exec();

    return res.status(200).send({size});
})

module.exports = router