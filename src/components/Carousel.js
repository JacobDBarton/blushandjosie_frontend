import React from "react";
import { Carousel } from "react-bootstrap";


export default function CarouselComponent() {
  return (
   
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="../images/blush.webp"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>We are so glad you are here!</h3>
            <p>Welcome to Blush & Josie!.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="../images/josie.webp"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="../images/sam.webp"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
  );
}
