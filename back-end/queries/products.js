const db = require('..db/dbConfig');

// Function queries our db
const getAllProducts = async () => {
    try {
        const allProducts = await db.any('SELECT * FROM products')
        return allProducts;
    } catch (error1) {
        return error1;
    }
}

const getProduct = async (id) => {
    try {
        const oneProduct = await db.one("SELECT * FROM products WHERE id=$1", id);
        return oneProduct;
    } catch (error2) {
        return error2;
    }
}

const updateProduct = async(id, product) => {
    const { name, reviews, image, description, price, size, color, featured } = product;
    console.log('Update', Product);
    try {
        const updatedProduct = await db.one("UPDATE products SET name=$1, reviews=$2, image=$3, description=$4, price=$5, size=$6, color=$7, featured=$8 WHERE id=$9 RETURNING *", [name, reviews, image, description, price, size, color, featured]);
        console.log('Updating', updatedProduct);
        return updatedProduct
    } catch (error) {
        console.log('error9')
        return error
    }
}

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
    updateProduct,
    deleteProduct,
};