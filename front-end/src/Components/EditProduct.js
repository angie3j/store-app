import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditForm() {
  const URL = process.env.REACT_APP_API_URL;
  let { id } = useParams();
  const navigate = useNavigate();

  const [product, setProducts] = useState({
    name: "",
    reviews: "",
    image: "",
    description: "",
    price: "",
    size: "",
    color: "",
    // featured: 
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
        onSubmit={handleSubmit}
      >
        <br />
        <br />
        <fieldset style={{ color: "dark gray" }}>
          <legend>EDIT product</legend>
          <br />
          <h3>
            <label htmlFor="date">Date</label>
            <input
              id="date"
              name="date"
              value={product.date}
              type="text"
              onChange={handleTextChange}
              placeholder="date"
              required
            />
          </h3>
          <br />
          <br />

          <h3>
            <label htmlFor="from">product Type:</label>
            <input
              id="source "
              name="source"
              value={product.source}
              type="text"
              onChange={handleTextChange}
              placeholder="source"
            ></input>
          </h3>
          <br />
          <br />

          <h3>
            <label htmlFor="amount">Amount:</label>
            <input
              id="amount"
              type="number"
              name="amount"
              value={product.amount}
              placeholder="amount"
              onChange={handleTextChange}
            />
          </h3>

          <br />
          <br />
          <div>
            <button type="submit">SUBMIT</button>
            <br />
            <br />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default EditForm;
