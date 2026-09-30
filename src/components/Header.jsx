import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/passion-logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";


const Header = () => {
    //Hide navbar on scroll
    const [prevScrollPos, SetPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    //Track mobile menu toggle
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };


    useEffect(() => {
        const handeleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            //check if user scrolled up or down
            const isVisible = prevScrollPos > currentScrollPos;
            SetPrevScrollPos(currentScrollPos);
            setVisible(isVisible);
        }
        window.addEventListener('scroll', handeleScroll);
        //Clean up the event listener on unmount
        return () => window.removeEventListener('scroll', handeleScroll);
    }, [prevScrollPos]);

    //css style 
    const headerStyle = {
        position: 'fixed',
        top: visible ? '0' : '-60px',
        left: 0,
        width: '100%',
        height: '60px',
        backgroundColor: '#FFF',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxSizing: 'border-box',
        transition: 'top 0.3s ease-in-out',
        zIndex: 1000,
        boxShadow: '0 1px 2px rgba(0,0,0,0.3)',
    };



    return (
        <>
            <header className="header" style={headerStyle}>
                <div className="container">

                    <div className="brand-name">
                        <Link to="/"><img src={logo} alt="Logo" /></Link>
                    </div>

                    {/* Mobile Menu Icon */}
                    {/* Mobile Menu Icon */}
                    <div className="menu-icon" onClick={toggleMenu}>
                        {isOpen ? <i className="rx rx-RxCross1" size={60}><RxCross1 /></i> : <i className="gi gi-GiHamburgerMenu" size={60}><GiHamburgerMenu /></i>}
                    </div>

                    <nav className="nav">
                        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
                            <li> <NavLink
                                to="/"
                                onClick={closeMenu}
                                className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}
                            >
                                Home
                            </NavLink></li>
                            <li><NavLink
                                to="/about"
                                onClick={closeMenu}
                                className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}
                            >
                                About
                            </NavLink></li>
                            <li><NavLink
                                to="/services"
                                onClick={closeMenu}
                                className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}
                            >
                                Services
                            </NavLink></li>
                            <li><NavLink
                                to="/portfolio"
                                onClick={closeMenu}
                                className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}
                            >
                                Portfolio
                            </NavLink></li>
                            <li><NavLink
                                to="/contact"
                                onClick={closeMenu}
                                className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}
                            >
                                Contact
                            </NavLink></li>


                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header;