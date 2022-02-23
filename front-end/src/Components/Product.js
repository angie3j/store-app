import { Link } from "react-router-dom";

function Product({ product, id }) {
  console.log('HELLO', product)
  return (
      <div className="productCard">
            <Link style={{ color: "#66A3A3" }} to={`/products/${id}`}>
              {product.name}
            </Link>
        
          <p className="featured">
            {product.featured ? <span>♥</span> : <span>♡</span>}
          </p>
        </div>
  
  ); 
}

export default Product;
