import React from "react";
import Gallery1 from "../../images/gallery-1.png";
import Gallery2 from "../../images/gallery-2.png";
import Gallery3 from "../../images/gallery-3.png";
import Gallery4 from "../../images/gallery-4.png";

export default function Section4() {
    return (<div className="section-4">
        <div className="gallery-wrap">
            <h3>Customer Gallery</h3>
            <div className="gallery">
                <div><img src={Gallery1} alt="galleryimage.png"/></div>
                <div><img src={Gallery2} alt="galleryimage.png"/></div>
                <div><img src={Gallery3} alt="galleryimage.png"/></div>
                <div> <img src={Gallery4} alt="galleryimage.png"/></div>              
            </div>
            <button className="btn primary-btn">View More</button>
        </div>
    </div>)
}