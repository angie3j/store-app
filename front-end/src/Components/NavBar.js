import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="Nav">
      <h1>HAPPY SPARKY BOUTIQUE</h1>
      <button>
        <Link style={{ color: "white" }} to="/products">
          {" "}
          LEASHES
        </Link>
      </button>
    </nav>
  );
}

export default NavBar;
