import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Form() {
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const [products, setProducts] = useState({
    name: "",
    reviews: "",
    image: "",
    description: "",
     price: "",
     size: "",  
     color: "", 
    //  featured: Boolean, 
  });

  const handleTextChange = (event) => {
    setProducts({ ...products, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    console.log(products);
    event.preventDefault();
    axios
      .post(`${URL}/products/`, products)
      .then(() => navigate(`/products`));
  };

  return (
    <div className="New">
      <form 
      className="newForm" 
      onSubmit={handleSubmit}>
        <fieldset style={{ color: "#66A3A3" }}>
          <legend>Create a New Item</legend>
          <br />

          <h3>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={products.name}
              type="text"
              onChange={handleTextChange}
              placeholder="name"
              required
            />
          </h3>
          <br />

          <h3>
            <label htmlFor="reviews">Reviews</label>
            <input
              id="reviews"
              name="reviews"
              value={products.reviews}
              type="text"
              onChange={handleTextChange}
              placeholder="reviews"
              required
            />
          </h3>
          <br />

          <p>
              <img 
              src={products.image} 
              alt='Dog Accessory'
              />
          </p>
          <br />

          <h3>
            <label htmlFor="description">Description</label>
            <input
              id="description"
              name="description"
              value={products.description}
              type="text"
              onChange={handleTextChange}
              placeholder="description"
              required
            />
          </h3>
          <br />

          <h3>
            <label htmlFor="price">Price</label>
            <input
              id="price"
              name="price"
              value={products.price}
              type="text"
              onChange={handleTextChange}
              placeholder="price"
              required
            />
          </h3>
          <br />

          <h3>
            <label htmlFor="size">size</label>
            <input
              id="size"
              name="size"
              value={products.size}
              type="text"
              onChange={handleTextChange}
              placeholder="size"
              required
            />
          </h3>
          <br />

          <h3>
            <label htmlFor="color">Color</label>
            <input
              id="color"
              name="color"
              value={products.color}
              type="text"
              onChange={handleTextChange}
              placeholder="color"
              required
            />
          </h3>
          <br />

          <h3>
            <label htmlFor="featured">Featured</label>
            <input
              id="featured"
              name="featured"
              value={products.featured}
              type="text"
              onChange={handleTextChange}
              placeholder="featured"
              required
            />
          </h3>
          <br />

          <div>
            <button
              style={{ color: "blue", textAlign: "center" }}
              type="submit">
              Submit
            </button>

          </div>
          <br />
        </fieldset>
      </form>
    </div>
  );
}

export default Form;
