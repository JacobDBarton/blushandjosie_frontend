import React from "react";
import { Link } from "react-router-dom";
import CarouselComponent from "../components/Carousel.component";

function Home() {
  return (
    <div>
      <p>We are so glad you are here</p>
      <h1> Welcome to Blush & Josie </h1>
      <CarouselComponent />
      <h1>Blush & Josie</h1>
      <p>
        Blush & Josie is a brand of earrings meant to empower and uplift women
        and men. Our pieces are meant to enhance your inner beauty through a
        newfound confidence and outer beauty through modern clay designs.{" "}
      </p>
      <h2>Check out our collection of hand-crafted earrings here!</h2>
      <img
        alt="blush&josie logo"
        src="https://cdn-icons-png.flaticon.com/512/2093/2093785.png"
        width="200"
        height="60"
        className="d-inline-block align-top"
      />
      <Link to="/Products">
        <div>Collections Page</div>
      </Link>
    </div>
  );
}

export default Home;
