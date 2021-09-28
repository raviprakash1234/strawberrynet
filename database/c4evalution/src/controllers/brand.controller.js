const express = require("express")



const Brand = require("../models/brand.model")
// const City = require("../models/city.model")


const crudController = require("./crud.controller")



const router = express.Router()

//---------crud api for brand----------------


router.post("/", async (req,res)=>{
    const brand  = await Brand.create(req.body)

    return res.status(201).send({brand})
})

//getting all Company
router.get("/", async (req, res)=>{
    const brand = await Brand.find().lean().exec()

    return res.status(200).send({brand})
})


//geting 1 comapny

router.get("/:id", async (req,res)=>{
    const brand  = await Brand.findById(req.params.id).lean().exec()

    return res.status(200).send({brand})
})






module.exports = router