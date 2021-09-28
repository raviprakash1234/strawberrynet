const express = require("express")
// const { model } = require("mongoose")


const Product = require("../models/product.model")
// const Company = require("../models/company.model")


const crudController = require("./crud.controller")


const router = express.Router()


//-----------crud api for product-------------

router.post("", crudController.post(Product))
router.get("", crudController.get(Product))


//add product
// router.post("/", async (req,res)=>{
//     const product  = await Product.create(req.body)

//     return res.status(201).send({product})
// })


//geting 1 city

router.get("/:id", async (req,res)=>{
    const product  = await Product.findById(req.params.id).lean().exec()

    return res.status(200).send({product})
})



module.exports = router