import React, { useState } from "react";
import "./carousel.scss";
import leftArrow from "../../images/leftArrow.svg";
import rightArrow from "../../images/rightArrow.svg";

export const CarouselItem = ({ children, width }) => {
    return (
        <div className="carousel-item" style={{width: width}}>
            {children}
        </div>
    );
}

export default function Carousel ({ children, arrowIndicator, pageIndicator}) {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = newIndex => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = React.Children.count(children) -1;
        }
        setActiveIndex(newIndex)
    }
    return (
        <div className="carousel-wrap">
        <div className="carousel">
            <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)`}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {width: "100%"});
                })}
            </div>
            {pageIndicator ? (
                <div className="page-indicators">
                {React.Children.map(children, (child, index) => {
                    return (
                        <div 
                            className={`${index === activeIndex ? "active " : ""}`} 
                            onClick={() => {updateIndex(index)}}>
                        </div>
                    )
                })}
            </div>
            ) : ""}
        </div>
        {arrowIndicator ? (
                <div className="arrow-indicators">
                    <div onClick={() => updateIndex(activeIndex - 1)}><img src={leftArrow} alt="leftArrow.svg"/></div>
                    <div onClick={() => updateIndex(activeIndex + 1)}><img src={rightArrow} alt="rightArrow.svg"/></div>
                </div>
            ) : ""}
        </div>
        
    )
}


