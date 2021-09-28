const express = require("express")



const User = require("../models/user.model")
const City = require("../models/product.model")


const crudController = require("./crud.controller")



const router = express.Router()



//add users
router.post("/", async (req,res)=>{
    const user  = await User.create(req.body)

    return res.status(201).send({user})



})

//getting all users
router.get("/", async (req, res)=>{
    const user = await User.find().lean().exec()

    return res.status(200).send({user})

   
})


//geting 1 User
router.get("/:id", async (req,res)=>{
    const user  = await User.findById(req.params.id).lean().exec()

    return res.status(200).send({user})
})


//update a single users
router.patch("/:id", async (req,res)=>{
    const user = await User.findByIdAndUpdate(req.params.id, req.body,{new:true}).lean().exec()

    return res.status(200).send({user})
})

//delete a single user
router.delete("/:id", async (req,res)=>{
    const user = await User.findByIdAndDelete(req.params.id)
    return res.status(200).send({user})
})

module.exports = router








