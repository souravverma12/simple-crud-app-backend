const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute=require('./routes/product.route.js');
const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use("/api/products",productRoute);










app.get("/", (req, res) => {
  //get is a method in express that defines a route for handling GET request
  res.send("hello from Node API server updated"); // it sends back the response to the client.


});



// //CREATE A PRODUCT
// app.post("/api/products", async (req, res) => {
//   // used to save something basically we want to save data in DB created by model
//   try {
//     const product = await Product.create(req.body); /////CREATE the product
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });











//READ A PRODUCT

// app.get("/api/products", async (req, res) => {
//   // used to view the lists
//   try {
//     const products = await Product.find(req.body); /////READ the product
//     //Product.find(req.body): This is a Mongoose method used to find documents in the "products" collection that match the given criteria (req.body in this case). req.body typically contains data submitted by the client in a POST request, which might include filters or search parameters for querying the database.
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });


// app.get("/api/products/:id", async (req, res) => {
//   // used to view the single list
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id); ///////// /////READ the product
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });








//EDIT OR UPDATE THE product
// app.put("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body); ///////// /////UPDATE
//     if (!product) {
//       return res.status(404).json({ message: "product not found" });
//     }

//     // now the product is updated
//     const updatedProduct = await Product.findById(id); //it will return the updated product
//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });









//Delete the product
// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product=await Product.findByIdAndDelete(id);
//     if (!product) {
//       return res.status(404).json({ message: "product not found" });
//     }
//     res.status(200).json("product deleted successfully");
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });







//CONNECTION of THE DATABASE (MONGODB)
mongoose
  .connect(
    "mongodb+srv://sv509712:sourav786@backenddb.u21f5db.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=backendDB"
  )
  .then(() => {
    console.log("connected to database");
    app.listen(3000, () => {
      console.log("server is running on pert 3000"); //serve is running on port 3000
    });
  })

  .catch(() => {
    console.log("Connection failed");
  });
