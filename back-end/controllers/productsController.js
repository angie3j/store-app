const express = require("express");
const products = express.Router();

const{
    getAllProducts,
    getProduct,
    createProduct, 
    deleteProduct,
    updateProduct,
} = require("../queries/products");


// INDEX- GET ALL- the entire products object
products.get('/', async (_, response) => {
    console.log("GET request to /products")
    const allProducts = await getAllProducts()
    console.log('controller', allProducts)
    if(allProducts.length === 0) {
        response.status(404).json({ error: 'Products Not Found' })
        return
    } 
    response.status(200).json(allProducts)
});

// SHOW- GET a single product by id
products.get("/:id", async (request, response) => {
    const { id } = request.params;
    const product = await getProduct(id)
    console.log("GET request to /products/:id")
    if (product.length === 0) {
        response.status(404).json({error: 'Product Not Found'}) 
    } else {
        response.status(200).json(product)
    } 
})

// POST - CREATE a new product
products.post('/', async (request, response) => { 
    const product = await createProduct(request.body);
    console.log(product);
    if (!createProduct) {
        response.status(404).json({error: "Product Not Posted"})
    } else {
    response.status(200).json(product)
    }
})

// DELETE a single product by id
products.delete('/:id', async (request, response) => {
    console.log('DELETE request to/products/:id');
    const { id } = request.params;
    const deletedProduct = await deleteProduct (id);
    if (!deletedProduct) {
        console.log(deletedProduct)
        response.status(404).json({error: 'Product Does Not Exist'});
        return
    } else {
    response.status(200).json(deletedProduct)
    }
})

// UPDATE
products.put('/:id', async (request, response) => {
    const product = await updateProduct(request.params.id, request.body);
    if (product.id) {
    response.status(200).json(product)
    } else {
    response.status(404).json({error: 'Product Cannot be Updated'})
    }
})

module.exports = products;