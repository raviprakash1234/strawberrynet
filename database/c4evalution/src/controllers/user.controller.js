const express = require("express")



const User = require("../models/user.model")
const City = require("../models/wishlist.model")


const crudController = require("./crud.controller")



const router = express.Router()



//add users
router.post("/", async (req,res)=>{
    const user  = await User.create(req.body)

    return res.status(201).send({user})



})

//getting all users
router.get("/", async (req, res)=>{
    const users = await User.find().lean().exec()

   res.render("users/all_users.ejs", {
       users:users
   })

   
})


//geting 1 User
router.get("/:id", async (req,res)=>{
    const user  = await User.findById(req.params.id).lean().exec()

    res.render("users/user.ejs", {
        user:user
    })
})




//delete a single user
router.delete("/:id", async (req,res)=>{
    const user = await User.findByIdAndDelete(req.params.id)
    return res.status(200).send({user})
})

module.exports = router








