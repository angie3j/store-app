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
        })
        .catch((error) => console.log('catch', error))
    }, [URL]);

    const productsDisplay = products.map((product, id) => {
        return(
            <Product 
                product={product}
                id={id}
                key={id}
            />
        )
    })

    return (
        <div>{ productsDisplay }</div>
    )
}

export default Products;