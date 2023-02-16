import React from "react";
import handmadeKitchen from '../../images/handmade-kitchen.png';

export default function Section2() {
    return (
    <div className="section-2">
        <div><img src={handmadeKitchen} alt="handmade-kitchen.png"/></div>
        <div>
            <p className="title highlight">Quality Craftmanship from build to delivery</p>
            <h2>Discover the beauty of a handmade kitchen</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget est sit amet sapien venenatis maximus vel in urna. Nam mauris arcu, feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna eu pharetra tincidunt, mauris purus ultrices.</p>
            <button className="btn primary-btn">ABOUT US</button>
        </div>
    </div>)
}