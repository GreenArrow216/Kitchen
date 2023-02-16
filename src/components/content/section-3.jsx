import React from "react";
import Carousel, { CarouselItem } from "../carousel/carousel";

export default function Section3() {
    return (
    <div className="section-3">
        <div>
            <p className="title highlight"> What Our Customers Say</p>
            <h3>Over 35 years experience designing handmade kitchens</h3>
            <Carousel arrowIndicator={true} pageIndicator={false}>
                <CarouselItem>
                    <div>
                    <p>Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.</p>
                        <p>Jane, Dundee</p>
                    </div>
                
                </CarouselItem>
                <CarouselItem>
                    <div>
                        <p>Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.</p>
                        <p>Jane, Dundee</p>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div>
                        <p>Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.</p>
                        <p>Jane, Dundee</p>
                    </div>
                </CarouselItem>
            </Carousel>
            <button className="btn primary-btn">Frequently Asked Questions</button>
        </div>
    </div>)
}