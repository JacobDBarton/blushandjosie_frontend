import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
            <Carousel>
                <div>
                    <img src="../blush.webp" />
                </div>
                <div>
                    <img src="../josie.webp" />
                </div>
                <div>
                    <img src="../sam.webp" />
                </div>
            </Carousel>
        </div>
    );
}