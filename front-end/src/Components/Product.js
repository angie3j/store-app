import { Link } from "react-router-dom";

function Product({ product, id }) {
  return (
    <div className="wrapper">
      <div className="card">
        <div>
          <p>
            <img src={product.image} alt="Product Thumbnail" />
          </p>

          <p>
            <Link style={{ color: "#66A3A3" }} to={`/products/${id}`}>
              {product.name}
            </Link>
          </p>
          <p className="favorite">
            {product.is_healthy ? <span>♥</span> : <span>♡</span>}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
