// imports
const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')

const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())

const connectionString = "mongodb+srv://nicathuseyn:!NicatCodeAcademy2300!@cluster0.2i0yljd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


// create schema
const createSchema = new mongoose.Schema({
  title: { type: String, require: true },
  image: { type: String, require: true },
  price: { type: Number, require: true },
  isNew: { type: Boolean, require: true },
})

//  create model 
const ProductModel = mongoose.model("Product", createSchema);

// Create a products
app.post('/api/products', async (req, res) => {
  try {
    const createProduct = await ProductModel({...req.body})

    res.status(201).send({message:"Create new product", data:createProduct})
  await createProduct.save()
  } catch (error) {
    res.status(500).send({message:"Internal Server Error", ErrorMessage:error.message})
  }
});

// Get All products
app.get('/api/products', async (req, res) => {
  try {
    const products = await ProductModel.find({});
    if (products.length ===0) {
      return res.send({message:"Products is empty", data:null})
    }

    res.status(200).send({message:"Successfully", data:products})

  } catch (error) {
    res.status(500).send({message:"Internal Server Error", ErrorMessage:error.message})
  }
});

// Get a Single products
app.get('/api/products/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const product = await ProductModel.findById(id);
    if (!product) {
      return res.send({message:"Products is empty", data:null})
    }
    res.status(200).send({message:"Successfully", data:product})

  } catch (error) {
    res.status(500).send({message:"Internal Server Error", ErrorMessage:error.message})
  }
});

// Update a products
app.put('/api/products/:id', (req, res) => {
  // Logic to update a products
});

// Delete a products
app.delete('/api/products/:id', async (req, res) => {
  try {
    const {id} = req.params;

    const deleteProduct = await ProductModel.findByIdAndDelete(id);

    if (!deleteProduct) {
      return res.send({message:"Products is empty", data:null})
    }
    res.status(200).send({message:"Successfully", data:deleteProduct})

  } catch (error) {
    res.status(500).send({message:"Internal Server Error", ErrorMessage:error.message})
  }
});


mongoose.connect(connectionString)
  .then(() => {
    console.log("Connected");
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  })