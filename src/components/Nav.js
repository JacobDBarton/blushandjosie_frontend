import { Link } from "react-router-dom";

function NavBar(props) {
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };

  return (
    <header>
      <h1>Blush and Josie</h1>
      <nav style={navStyle}>
        <Link to="/">
          <div>HOME</div>
        </Link>
        <Link to="/Collection">
          <div>Collections</div>
        </Link>
        <Link to="/Show">
          <div>Show Page</div>
        </Link>
        <Link to="/cart">
          <div>CART</div>
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;