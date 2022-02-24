import { Link } from "react-router-dom";

function Product({ product, id }) {
  // const { name, reviews, image, featured } = useState;
  return (
    <div className="container">
      <div className="productCard">
        <div>
          <p>
            <Link style={{ color: "#66A3A3" }} to={`/products/${id}`}>
              {product.name}
            </Link>
          </p>

          <img src={product.image} alt="Dog Leash" />

          <p className="featured">
            {product.featured ? <span>♥</span> : <span>♡</span>}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
