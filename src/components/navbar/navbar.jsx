import React, { useEffect, useState } from 'react';
import Icons from '../icons/icons';
import logo from "../../images/logo.svg"
import shoppingCart from '../../images/shopping-cart.png'
import "./navbar.scss"
import { useWindowSize } from '../customHook';

export default function NavBar() {
    const [offset, setOffset] = useState(0);
    const [showMenu, setMenuVisibility] = useState(false);
    const windowSize = useWindowSize();
    console.log(windowSize);
    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return (
    <div className={`navbar ${offset > 90 || showMenu ? "navbar-scrolled" : ""} ${windowSize.width < 785 ? " small" : "" }`}>
        {windowSize.width > 785 ? (
            <div className='navbar-container'>
                <ul className=''>
                    <Icons isTransparent={true}/>
                    <li>SHOP</li>
                    <li>PLAN MY KITCHEN</li>
                    <img src={logo} alt="logo.svg"/>
                    <li>ABOUT US</li>
                    <li>GALLERY</li>
                    <button className='btn alt-btn'>My Order <img src={shoppingCart} alt="shoppingcart.svg"/></button>
                </ul>
            <div className='horizontal-line'/>
        </div>
        ) : (
            <>
                <div className='logo' onClick={() => setMenuVisibility(!showMenu)}><img src={logo} alt="logo.svg"/></div>
                {showMenu ? (
                    <div className='navbar-container'>
                        <ul>
                            <li>SHOP</li>
                            <li>PLAN MY KITCHEN</li>
                            <li>ABOUT US</li>
                            <li>GALLERY</li>
                            <button className='btn alt-btn'>My Order <img src={shoppingCart} alt="shoppingcart.svg"/></button>
                        </ul>
                    </div>
                ) : ""}
            </>
        )}
        
    </div>
    );
}