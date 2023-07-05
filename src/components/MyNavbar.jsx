import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";

const MyNavbar = () => {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Amazun</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Link to="/" className="nav-link">
              Dashboard
            </Link>
            <Link to="/cart" className="nav-link">
              {/* <img src="cart-logo.png" alt="Cart" /> */}
              Cart: {cartProducts.length} items
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
