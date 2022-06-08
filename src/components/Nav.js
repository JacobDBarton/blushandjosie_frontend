import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

const Nav = (props) => (
  <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand as={Link} to="/">
        <img
          alt="blush&josie logo"
          src="https://cdn-icons-png.flaticon.com/512/2093/2093785.png"
          width="200"
          height="60"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Link to="/cart">
        <div>Cart Page</div>
      </Link>
    </Container>
  </Navbar>
);

export default Nav;
