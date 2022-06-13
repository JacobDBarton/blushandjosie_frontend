import "../styles/App.css";
import React from "react";
import { Link } from "react-router-dom";
import CarouselComponent from "../components/Carousel";

function Home() {
  return (
    <div style={{ marginTop: 10 }}>
      <CarouselComponent />
      <h1>Blush & Josie</h1>
      <p>
        Blush & Josie is a brand of earrings meant to empower and uplift women
        and men. Our pieces are meant to enhance your inner beauty through a
        newfound confidence and outer beauty through modern clay designs.{" "}
      </p>
      <h2>Check out our collection of hand-crafted earrings here!</h2>

      <Link to="/products">
        <img
          alt="blush&josie logo"
          src="https://cdn.shopify.com/s/files/1/0415/5047/9512/products/image_6d26c5d0-1708-4b54-9a26-6ab5fbfb5922_1080x.jpg?v=1624917658"
          width="180"
          height="180"
          className="collectionImage"
        />
        <div>Check out our collection of earrings here!</div>
      </Link>
    </div>
  );
}

export default Home;
