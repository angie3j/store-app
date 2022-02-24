import { Link } from "react-router-dom";

function Product({ product, id }) {
  // const { name, reviews, image, featured } = useState;
  return (
    <div className="container">
      <div className="productCard">
        <div>
          <p>
            <Link style={{ color: "rgb(6, 6, 245)" }} to={`/products/${id}`}>
              {product.name}
            </Link>
          </p>

          <p className="featured">
            {product.featured ? <span>♥</span> : <span>♡</span>}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
