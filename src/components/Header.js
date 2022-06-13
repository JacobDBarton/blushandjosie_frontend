import Logo from "./image/blush.png";
import { Badge, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../styles/App.css";

function Header(props) {
  const { cart } = props;
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="rounded">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            className="d-inline-block align-text-top"
            src={Logo}
            alt="blush&josie logo"
            width="234"
            height="60"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/products">
              Collection
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <div class="align-center" style={{marginTop: 2}}>
                <FontAwesomeIcon icon={faCartShopping} />
                <Badge bg="secondary" pill>
                  {cart.length}
                </Badge>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
