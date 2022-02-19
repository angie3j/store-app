const db = require('..db/dbConfig');

const getAllProducts = async () => {
    try {
        const allProducts = await db.any('SELECT * FROM products')
    } catch (error1) {
        return error1;
    }
}

const getProduct = async () => {
    try {
        const oneProduct = await db.one("SELECT * FROM products WHERE id=$1", id);
        return oneProduct;
    } catch (error2) {
        return error2;
    }
}




module.exports = {
    getAllProducts,
    getProduct,
}