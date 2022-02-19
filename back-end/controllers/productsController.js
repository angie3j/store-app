const express = require('express');
const products = express.Router();

const{
    getAllProducts,
    getProduct
} = require('../queries/products');

// GET ALL- the entire products object
products.get('/', async (_, response) => {
    console.log("GET request to /products");
    const allProducts = await getAllProducts();
    console.log(allProducts);
    if(allSnacks.length === 0) {
        response.status(404).json({ error: 'Server Error' });
        return;
    }
    response.status(200).json(allProducts);
});

products.get("/:id", async (request, response) => {
    console.log("GET request to /Products/:id");
    const song = await getProduct(request.params.id);
    response.status(200).json(song);
})


module.exports = products;