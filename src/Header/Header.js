import './Header.css';
import navbarSymbol from './header_images/navbarSymbol.svg';
import xSymbol from './header_images/xSymbol.svg';
import React, { useState } from 'react';


const Header = () => {
    const [navbarOut, setNavbarOut] = useState(false);
    const handleNavbar = () => {
        setNavbarOut( !navbarOut );
      }
      
    return (
        <header>
            <nav onClick={handleNavbar}>
                <img src={`${!navbarOut ? navbarSymbol : xSymbol}`} alt='navbar'/>
                <ul className=
                {`${!navbarOut ? 'hidden_list' : 'navbarDisplay'}`}>
                    <li><a href="projects.html">Projects</a></li>
                    <li><a href="./containers/about.js">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
            <div> <a href="contact.html">Contact</a></div>
        </header>
    );
}

export default Header;