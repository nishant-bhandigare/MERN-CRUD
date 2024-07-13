const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

const app = express();
const port = 3000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
    res.send("<h1>Hello from Node API</h1>");
});

//connect to database and setup server
mongoose.connect('mongodb://127.0.0.1/Practice')
    .then(() => {
        console.log("Connected to database!");
        app.listen(port, () => {
            console.log("Hello Express!");
            console.log(`Server running on port ${port}`);
        });
    }).catch(() => {
        console.log("Connection failed");
    });


//get all the products
// app.get("/api/products", async (req, res) => {
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         });
//     }
// });

//search a specific product by id
// app.get("/api/products/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         });
//     }
// });

//create a product
// app.post("/api/products", async (req, res) => {

//     // console.log(req.body);
//     // res.send(req.body);

//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         });
//     }
// });

//update a product
// app.put("/api/products/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);

//         if (!Product) {
//             return res.status(404).json({ message: "Product not found" });
//         }

//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);

//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         });
//     }
// });

//delete a product
// app.delete("/api/products/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findByIdAndDelete(id);

//         if (!product) {
//             return res.status(404).json({ message: "Product not found" });
//         }
//         res.status(200).json({ message: "Product deleted successfully" });
        
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         });
//     }
// });