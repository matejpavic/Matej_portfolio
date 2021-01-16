import './Header.scss';
import navbarSymbol from './header_images/navbarSymbol.svg';
import xSymbol from './header_images/xSymbol.svg';
import React, { useState } from 'react';

import { Link } from "react-router-dom";


const Header = () => {
    const [navbarOut, setNavbarOut] = useState(false);
    const handleNavbar = () => {
        setNavbarOut( !navbarOut );
      }
      
    return (
        <header>
            <nav onClick={handleNavbar}>
                <img src={!navbarOut ? navbarSymbol : xSymbol} alt='navbar'/>
                <ul className=
                {`${!navbarOut ? 'hidden_list' : 'navbarDisplay'}`}>
                    <li><Link to='/'>Homepage</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
            <div> <Link to='/contact'>Contact</Link></div>
        </header>
    );
}

export default Header;