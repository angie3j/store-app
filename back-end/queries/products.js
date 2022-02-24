const db = require('../db/dbConfig');

// Queries our db for all the products
const getAllProducts = async () => {
    try {
        const allProducts = await db.any('SELECT * FROM products');
        return allProducts;
    } catch (error1) {
        return error1;
    }
}

// Individual Product
const getProduct = async (id) => {
    try {
        const oneProduct = await db.one("SELECT * FROM products WHERE id=$1", id);
        return oneProduct;
    } catch (error2) {
        return error2;
    }
}

// Create a New Product
const createProduct = async(product) => {
    const { name, reviews, image, description, price, size, color, featured } = product;
    console.log('create', product);
    try {
        const createdProduct = await db.one("INSERT INTO products (name, reviews, image, description, price, size, color, featured)  VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *", [name, reviews, image, description, price, size, color, featured]
        );
        // console.log('create', createdProduct);
        return createdProduct
    } catch (error) {
        console.log('error')
        return error
    }
}

// Update a Product
const updateProduct = async (product) => {
        const { name, reviews, image, description, price, size, color, featured } = product;
    try {
        const updatedProduct = await db.one('UPDATE products SET name=$1, reviews=$2, image=$3, description=$4, price=$5, size=$6, color=$7, featured=$8  WHERE id=$9 RETURNING *', [name, reviews, image, description, price, size, color, featured]
    )
    return updatedProduct
    } catch (error) {
        return error
    }
}

// Delete a Product
const deleteProduct = async (id) => {
    try { 
        const deletedProduct = await db.one("DELETE FROM products WHERE id=$1 RETURNING *", id);
        return deletedProduct;
    }catch (error) {
        return error;
    }
}

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct,
};