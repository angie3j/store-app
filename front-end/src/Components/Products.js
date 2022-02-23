import { useEffect, useState } from "react";
import axios from 'axios';
import Product from "./Product";

function Products() {
    const URL = process.env.REACT_APP_API_URL;
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        axios
        .get(`${URL}/products`)
        .then((response) => {
            setProducts(response.data)
            console.log('Happy', response.data)
        })
        .catch((error) => console.log('catch', error))
    }, [URL]);

    let reviews = '';

    const productsDisplay = products.map((product, id) => {
        if (product.rating === 1) {
            reviews = `❤️❤️❤️❤️ ${product.rating} Reviews`;
        }
        if (product.rating === 2) {
            reviews = `❤️❤️❤️❤️❤️ ${product.rating} Reviews`;
        }

        return(
            <Product 
                product={product}
                id={product.id}
                key={id}
            />
        )
    })

    return (
        <div>{ productsDisplay }</div>
    )
}

export default Products;