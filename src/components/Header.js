import Logo from "./image/blush.png";
import "../styles/App.css";

function header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              className="blush d-inline-block align-text-top"
              src={Logo}
              alt="blush&josie logo"
              width="300"
              height="300"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <a className="nav-link" href="/products">
                Collection
              </a>
              <a className="nav-link" href="/cart">
                Cart
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default header;
