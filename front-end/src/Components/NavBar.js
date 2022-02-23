import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="Nav">
      <h1 style={{textAlign: 'center'}}>SPARKY CO.</h1>
      <Link to="/products">
        <button style={{ color: "blue" }} >
          {" "}
         Happy
        </button>
      </Link>
    </nav>
  );
}

export default NavBar;
