const express = require("express");
const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://gourav:straw_berry_net@cluster0.aaoit.mongodb.net/strawberrynet?retryWrites=true&w=majority")

}

//---------------DATABASE--------------------------

// schema for users

const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    password: {type:String,required:true},
})


const User = mongoose.model("user", userSchema);

// Create Product Schema
const productSchema = new mongoose.Schema({
    product_name: {type: String, required: true},
    brand: {type: mongoose.Schema.Types.ObjectId, ref:"brand", required: true},
    price: {type: Number, required: true},
    product_quantity: {type: Number, required: true},
    gender: {type: String, required: false},
    sizes: [{type:mongoose.Schema.Types.ObjectId, ref: "size", required: true}],
    category: {type: mongoose.Schema.Types.ObjectId, ref: "category", required: true},
    product_image: [{type: String, required: false}],
    product_detail: [{type: String, required: false}],
    offer: {type: String, required:false}
    },
    {
        versionKey: false,
        timestamps: true
})

const Product = mongoose.model("product", productSchema);

// Create Brand Schema
const brandSchema = new mongoose.Schema({
    brand_name: {type: String, required: true}
    },
    {
        versionKey: false,
        timestamps: true
})

const Brand = mongoose.model("brand", brandSchema);


// Create size Schema
const sizeSchema = new mongoose.Schema({
    size_name: {type: String, required: true}
    },
    {
        versionKey: false,
        timestamps: true
})

const Size = mongoose.model("size", sizeSchema);

// Create Category Schema
const categorySchema = new mongoose.Schema({
    category_name: {type: String, required: true}
    },
    {
        versionKey: false,
        timestamps: true
})

const Category = mongoose.model("category", categorySchema);

// schema for cart

const cartSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    product_id: [{ type: mongoose.Schema.Types.ObjectId, ref: "product", required: true }],
    
})

const Cart = mongoose.model("cart", cartSchema)






const app = express()

app.use(express.json())

app.set("view engine", "ejs")

app.use(express.static("public"))

// ---------------------------------------Crud APIs for products------------------------------------------------

app.post("/products", async (req, res) => {
    const products = await Product.create(req.body)

    res.send({products})
})

app.get("/products", async (req, res) => {
    const products = await Product.find().populate("brand").populate("category").populate("sizes").lean().exec();
    const dailySpecial = await Product.find({offer: "daily special"}).populate("brand").populate("category").populate("sizes").limit(4).lean().exec();
    const bestDeal = await Product.find({offer: "best deal"}).populate("brand").populate("category").populate("sizes").limit(4).lean().exec();
    const antiAging = await Product.find({offer: "anti-aging"}).populate("brand").populate("category").populate("sizes").limit(4).lean().exec();

    return res.render('home.ejs', {
        products: products,
        dailySpecial: dailySpecial, 
        bestDeal: bestDeal,
        antiAging: antiAging
    });
    //res.send({products})
})

app.get("/products/:id", async (req, res) => {
    const product = await Product.findById(req.params.id).lean().exec()
    //console.log(product)

    res.render("p2.ejs", {
        product: product
    })
    // res.send({product})
})

app.get("/products/category/:id", async (req, res) => {
    const prod = await Product.find({ category: req.params.id }).populate("brand").populate("category").lean().exec()//{ <field>: { $eq: <value> } }
   
    //console.log(prod)

    res.render("makeUp.ejs", {
        prod: prod
    })
     //res.send({prod})
})

//........................................APIs for Brand........................................................//

// post:- Create a brand
app.post("/brand", async (req, res) => {
    const brand = await Brand.create(req.body);

    return res.status(201).send({brand});
})

// get:- get all the brands details
app.get("/brand", async (req, res) => {
    const brand = await Brand.find().lean().exec();

    return res.render('products/shopByBrand.ejs', {
        brands: brand
    })
})

//......................................................APIs for category....................................................//


// post:- Create a category
app.post("/category", async (req, res) => {
    const category = await Category.create(req.body);

    return res.status(201).send({category});
})

// get:- get all the categorys details
app.get("/category", async (req, res) => {
    const category = await Category.find().lean().exec();

    return res.status(200).send({category});
})

//.......................................................APIs for size.............................................//


// post:- Create a size
app.post("/size", async (req, res) => {
    const size = await Size.create(req.body);

    return res.status(201).send({size});
})

// get:- get all the sizes details
app.get("/size", async (req, res) => {
    const size = await Size.find().lean().exec();

    return res.status(200).send({size});
})

//------------------------------------------CRUD APIs for cart----------------------------------------------------------


app.get("/cart", async (req, res) => {
    const cart = await Cart.find().select("product_id").lean().exec()

    res.render("cart.ejs", {
        cart: cart
    })
    //res.send({cart})
})

// app.post("/cart", async (req, res) => {
//     const cart = await Cart.create()

//     res.render("cart.ejs", {
//         cart: cart
//     })
// })






//----------------------------------------------------------
app.listen(2345,async function () {
    await connect();
    console.log("listning to port 2345")
})