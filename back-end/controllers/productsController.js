const express = require("express");

const{
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct
} = require('../queries/products');

const products = express.Router();

// GET ALL- the entire products object
products.get('/', async (_, response) => {
    console.log("GET request to /products");
    const allProducts = await getAllProducts();
    console.log(allProducts);
    if(allproducts.length === 0) {
        response.status(404).json({ error: 'Server Error' });
        return;
    }
    response.status(200).json(allProducts);
});

// GET a single product by id
products.get("/:id", async (request, response) => {
    console.log("GET request to /products/:id");
    const { id } = request.params;
    const product = await getProduct(id);
    response.status(200).json(product);
//     if (song.id) {
//         console.log("Get /:id");
//         response.status(200).json(song);
//     } else {
//         response.redirect("/redirect")
//     }
// })
})

// POST 
products.put('/:id', async (request, response) => { 
    const updatedProduct = await updateProduct(request.body);
    console.log(updatedProduct);
    if (updatedProduct === 'undefined') {
        response.status(404).json({error: "Not Posted"})
    } 
    response.status(200).json(updatedProduct)
})

// DELETE a single product by id
products.delete('/:id', async (request, response) => {
    console.log('DELETE request to/products/:id');
    const { id } = request.params;
    const deletedProduct = await deleteProduct (id);
    if (deletedProduct === 'undefined') {
        response.status(404).json({error: 'Server Error'});
        return
    }
    response.status(200).json(deletedProduct);
})


module.exports = products;