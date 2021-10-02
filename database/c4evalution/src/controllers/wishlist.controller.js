const express = require("express")
// const { model } = require("mongoose")


const Wishlist = require("../models/wishlist.model")
// const Company = require("../models/company.model")


const crudController = require("./crud.controller")


const router = express.Router()


//-----------crud api for product-------------

// router.post("", crudController.post(Wishlist))
// router.get("", crudController.get(Whislist))



router.post("/", async (req,res)=>{
    const wishlist  = await Wishlist.create(req.body)

    // res.render("users/all_wishlist.ejs", {
    //     wishlist:wishlist
    // })
    res.status(200).send({wishlist})
});

// find all
router.get("/:id", async (req,res)=>{
    const wishlist  = await Wishlist.find().lean().exec()

    res.render("users/all_wishlist.ejs", {
        wishlist:wishlist
    })
});


//geting 1 city

router.get("/:id", async (req,res)=>{
    const wishlist  = await Wishlist.findById(req.params.id).lean().exec()

    // return res.status(200).send({whislist})
    res.render("users/all_wishlist.ejs", {
        wishlist:wishlist
    })
});



module.exports = router