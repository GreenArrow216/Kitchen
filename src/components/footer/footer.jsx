import React from 'react';
import BannerImage from "../../images/banner-image.png";
import Logo from "../../images/logo.svg";
import Icons from "../icons/icons";
import "./footer.scss";

export default function Footer() {
    return (
        <div className='footer'>
            <img src={BannerImage} alt="footerimage.png"/>
            <div className='footer-overlay'>
                <div>
                    <div className='footer-title'>
                        <span className='horizontal-line'/>
                        <span className='logo'><img src={Logo} alt="logo.svg"/></span>
                        <span className='horizontal-line'/>
                    </div>
                    <div className='footer-links'>
                        <div>
                            <p>About</p>
                            <p>Shop</p>
                            <p>Plan My Kitchen</p>
                            <p>About Us</p>
                            <p>Gallery</p>
                        </div>
                        <div>
                            <p>Service</p>
                            <p>FAQ</p>
                            <p>Contact</p>
                            <p>How to Buy</p>
                            <p>Downloads</p>
                        </div>
                        <div>
                            <p>Info</p> 
                            <p>Delivery</p>
                            <p>Terms</p>
                            <p>Privacy</p>
                        </div>
                        <div>
                            <p>Follow</p>
                            <Icons isTransparent={false}/>
                        </div>
                    </div>
                    <div className='copyright'>
                        <p>Copyright Online MTC Home Kitchens 2018 - All rights reserved.</p>
                        <p> Responsive website design, Development & Hosting by mtc.</p>
                    </div>
                    <div className='horizontal-line'/>
                </div>
            </div>
        </div>
    );
}