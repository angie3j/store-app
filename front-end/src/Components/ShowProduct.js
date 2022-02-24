import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import React from "react";

function ShowProducts() {
  const URL = process.env.REACT_APP_API_URL;
  const [product, setProducts] = useState({});
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${URL}/products/${id}`)
      .then((response) =>
        setProducts(response.data)
      )
      .catch((error) => console.warn(error));
  }, [URL, id]);

  const handleDelete = () => {
    axios
      .delete(`${URL}/products/${id}`)
      .then((response) => {
        navigate(`/products`).catch((error) => console.warn(error));
      });
  };

  return (
    <div className="Details">
      <br />
      <br />
      <fieldset style={{ color: "#66A3A3" }}>
        <legend>Details</legend>

        <div className="showDetails">
          <h4>{product.name} </h4>

          <h4>Reviews {product.reviews}</h4>

          <h4>{product.description}</h4>

          <h4>{product.price}</h4>

          <h4>{product.size}</h4>

          <h4>{product.color}</h4>

          <h4>{product.featured}</h4>

          <div className="showNavigation">
            <div>
              <div>
                {" "}
                <Link to={`/products`}>
                  <button
                    style={{
                      color: "white",
                    }}
                  >
                    Back
                  </button>
                </Link>
              </div>
              <br />
            </div>

            <div>
              <div>
                {" "}
                <button
                  style={{ color: "white" }}
                  type="button"
                  className="button"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
              <br />
            </div>

            <div>
              <div>
                {" "}
                <Link to={`/products/${id}`}>
                  <button
                    style={{
                      color: "white",
                    }}
                    type="button"
                    className="button"
                  >
                    Edit
                  </button>
                </Link>
              </div>
              <br />
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
}

export default ShowProducts;
