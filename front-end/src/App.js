import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import EditProduct from "./Pages/Edit";
import Home from "./Pages/Home";
import Form from "./Pages/New";
import Show from "./Pages/Show";

// Components
import NavBar from "./Components/NavBar";
import Products from "./Components/Products";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/new" element={<Form />} />
          <Route path="/products/:id" element={<Show />} />
          <Route path="/products/:id/edit" element={<EditProduct />} />
        </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
