import './Header.css';
import navbarSymbol from './header_images/navbarSymbol.svg';

const Header = ({ navbarOut, handleNavbar }) => {
    return (
        <header>
            <nav onClick={handleNavbar}>
                <img src={navbarSymbol} alt='navbar'/>
                <ul className=
                {`${!navbarOut ? 'hidden_list' : 'navbarDisplay'}`}>
                    <li><a href="projects.html">Projects</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
            <div> <a href="contact.html">Contact</a></div>
        </header>
    );
}

export default Header;