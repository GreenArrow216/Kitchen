import React from "react";
import Carousel, { CarouselItem } from "../carousel/carousel";
import BannerImage from "../../images/banner-image.png";
import { useWindowSize } from "../customHook";

export default function Section1() {
    const windowSize = useWindowSize();
    console.log('windowSzi', windowSize < 600, windowSize )
    return (
    <div className="section-1">
      <Carousel pageIndicator={true}>
        <CarouselItem>
          <img src={BannerImage} alt="Kitchen.png"/>
          <div className="carousel-overlay">
            <p className="title">Design and order your new kitchen online today</p>
            <h1>Bespoke & made to measure handmade kitchen design</h1>
            <button className="btn primary-btn">Order now</button>
          </div>
        </CarouselItem>
        <CarouselItem>
          <img src={BannerImage} alt="Kitchen.png"/>
          <div className="carousel-overlay">
            <p className="title">Design and order your new kitchen online today</p>
            <h1>Bespoke & made to measure handmade kitchen design</h1>
            <button className="btn primary-btn">Order now</button>
          </div></CarouselItem>
        <CarouselItem>
          <img src={BannerImage} alt="Kitchen.png"/>
          <div className="carousel-overlay">
            <p className="title">Design and order your new kitchen online today</p>
            <h1>Bespoke & made to measure handmade kitchen design</h1>
            <button className="btn primary-btn">Order now</button>
          </div>
        </CarouselItem>
      </Carousel>
    </div>
      );
}