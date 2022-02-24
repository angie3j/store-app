import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="Nav">
      
      <Link to="/products/new">
        <button style={{ color: "white" }}>New</button>
      </Link>
      
      <Link to="/"
          className="store">
        <button style={{ color: "white", fontSize: '28px' }}>SPARKY CO.</button>
      </Link>

      <Link to="/products">
        <button 
        style={{ color: "white" }} >
          {" "}
         Leashes
        </button>
      </Link>

    </nav>
  );
}

export default NavBar;





// import /.

// <div className="Nav">
// {/* Getbootstrap.com -> Layout -> Breakpoints option 
// Expand makes it responsive, when it hits the large breakpoint. Anything past it, it switches to a sandwich menu. */}
// <Navbar expand='lg' bg='turquoise' navbar >
//   {/* A container will contain it w/i a certain space in the middle, provides some padding on the far left, far right. */}
//   <Container>
//     <a href='#home' class='navbar-brand'>SPARKY CO.</a>
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     Collapse allows for the product cards to shift around 
//   <Navbar.Collapse id="basic-navbar-nav">
    
//   </Navbar.Collapse>
//   </Container>
// </Navbar>

// </div>