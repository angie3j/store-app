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
    if (product.id) {
            console.log("GET request to /products/:id")
            response.status(200).json(product)
        } else {
     response.status(404).json({error: 'Product Not Found'}) 
    }
    
})

// POST - CREATE a new product
products.post('/new', async (request, response) => { 
    const product = await createProduct(request.body);
    console.log(product);
    if (!createProduct) {
        response.status(404).json({error: "Product Not Posted"})
    } 
    response.status(200).json(product)
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
    }
    response.status(200).json(deletedProduct);
})

// UPDATE
products.put('/:id', async (request, response) => {
    console.log('PUT /products')
    const { id } = request.params;
    const updatedProduct = request.body;
    const product = await updateProduct(updatedProduct, id)
    if (product.id) {
    response.status(200).json(product)
    } 
    response.status(404).json({error: 'Product Cannot be Updated'});
})

module.exports = products;