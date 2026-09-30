import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/passion-logo.png'

const Header = () => {
    const [activelink, setActiveLink] = useState('home');
    //Hide navbar on scroll
    const [prevScrollPos, SetPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    //Track mobile menu toggle
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const handeleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            //keep navbar visible if the mobile menu is currently open
            if (isOpen) return;

            //check if user scrolled up or down
            const isVisible = prevScrollPos > currentScrollPos;
            SetPrevScrollPos(currentScrollPos);
            setVisible(isVisible);
        }
        window.addEventListener('scroll', handeleScroll);
        //Clean up the event listener on unmount
        return () => window.removeEventListener('scroll', handeleScroll);
    }, [prevScrollPos, isOpen]);

    //css style 
    const navbarStyle = {
        position: 'fixed',
        top: visible ? '0' : '-60px',
        left: 0,
        width: '100%',
        height: '60px',
        backgroundColor: '#f3f3f3',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 2rem',
        boxSizing: 'border-box',
        transition: 'top 0.3s ease-in-out',
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)',

    };
    //inline style
    const styles = {
        hamburger: {
            display: window.innerWidth <= 768 ? 'flex' : 'none',
            flexDirection: 'column',
            gap: '5px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '5px',
        },
        bar: {
            width: '25px',
            height: '3px',
            backgroundColor: '#000',
            transition: '0.3s ease',
        }
    }


    return (
        <>
            <header className="header" style={navbarStyle}>
                <div className="container">

                    <div className="brand-name">
                        <Link to="/"><img src={logo} alt="Logo" /></Link>
                    </div>

                    {/* Hamburger Button for Mobile */}
                    <button style={styles.hamburger} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
                    </button>

                    <nav className="nav">
                        <ul style={styles.navLinks}>
                            <li><Link to="/" onClick={() => setActiveLink('home')} className={activelink === 'home' ? 'active' : ''} style={styles.link} onClick={() => setIsOpen(false)}>Home</Link></li>
                            <li><Link to="/about" onClick={() => setActiveLink('about')} className={activelink === 'about' ? 'active' : ''} style={styles.link} onClick={() => setIsOpen(false)}>About</Link></li>
                            <li><Link to="/services" onClick={() => setActiveLink('services')} className={activelink === 'services' ? 'active' : ''} style={styles.link} onClick={() => setIsOpen(false)}>Services</Link></li>
                            <li><Link to="/portfolio" onClick={() => setActiveLink('portfolio')} className={activelink === 'portfolio' ? 'active' : ''} style={styles.link} onClick={() => setIsOpen(false)}>Portfolio</Link></li>
                            <li><Link to="/portfolio" onClick={() => setActiveLink('portfolio')} className={activelink === 'portfolio' ? 'active' : ''} style={styles.link} onClick={() => setIsOpen(false)}>Portfolio</Link></li>
                            <li><Link to="/contact" onClick={() => setActiveLink('contact')} className={activelink === 'contact' ? 'active' : ''} style={styles.link} onClick={() => setIsOpen(false)}>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header;