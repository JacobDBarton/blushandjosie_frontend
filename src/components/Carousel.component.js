import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
            <Carousel interval={3000} showThumbs={false}>
                <div>
                    <img src="../images/blush.webp" alt=""/>
                </div>
                <div>
                    <img src="../images/josie.webp" alt=""/>
                </div>
                <div>
                    <img src="../images/sam.webp" alt=""/>
                </div>
            </Carousel>
        </div>
    );
}