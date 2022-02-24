import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditProduct() {
  const URL = process.env.REACT_APP_API_URL;
  let { id } = useParams();
  const navigate = useNavigate();

  const [product, setProducts] = useState({
    name: "",
    reviews: "",
    description: "",
    price: "",
    size: "",
    color: "",
    featured: "",
  });

  useEffect(() => {
    axios
      .get(`${URL}/products/${id}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        navigate("*");
      });
  }, [URL, id, navigate]);

  const handleTextChange = (event) => {
    setProducts({ ...product, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
    .put(`${URL}/products/${id}`, product)
    .then((res) => {
      navigate(`/products/${id}`);
    });
  };

  return (
    <div className="Edit">
      <br />
      <br />
      <form
        style={{ color: "gray" }}
        action="/action_page.php"
        onSubmit={ handleSubmit }>
        <br />
        <br />
        <fieldset style={{ color: "dark gray" }}>
          <legend>EDIT product</legend>
          
          <h3>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              name="name"
              value={product.name}
              type="name"
              onChange={handleTextChange}
              placeholder="name"
              required
            />
          </h3>

          <h3>
            <label htmlFor="reviews">Reviews</label>
            <input
              id="reviews "
              name="reviews"
              value={product.reviews}
              type="reviews"
              onChange={handleTextChange}
              placeholder="reviews"
            />
          </h3>

          <h3>
            <label htmlFor="description">Description:</label>
            <input
              id="description"
              type="description"
              name="description"
              value={product.description}
              placeholder="description"
              onChange={handleTextChange}
            />
          </h3>

          <h3>
            <label htmlFor="price">Price:</label>
            <input
              id="price"
              type="price"
              name="price"
              value={product.price}
              placeholder="price"
              onChange={handleTextChange}
            />
          </h3>

          <h3>
            <label htmlFor="size">Size:</label>
            <input
              id="size"
              type="size"
              name="size"
              value={product.size}
              placeholder="size"
              onChange={handleTextChange}
            />
          </h3>

          <h3>
            <label htmlFor="color">Color:</label>
            <input
              id="color"
              type="color"
              name="color"
              value={product.color}
              placeholder="color"
              onChange={handleTextChange}
            />
          </h3>

          <h3>
            <label htmlFor="featured">Featured:</label>
            <input
              id="featured"
              type="featured"
              name="featured"
              value={product.featured}
              placeholder="featured"
              onChange={handleTextChange}
            />
          </h3>

          <br />
          <br />
          <div>
            <button type="submit">SUBMIT</button>
     
          </div>
        </fieldset>
        <br />
        <br />
        
      </form>
    </div>
  );
}

export default EditProduct;
