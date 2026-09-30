import { Link } from 'react-router-dom';
import { BsTwitterX, BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import footerLogo from '../assets/passion-logo.png'
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer-bottom'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12 first-col">
                        <Link to="/" className="brand-name"><img src={footerLogo} alt='Passion-logo' /></Link>
                        <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>

                        <nav className='social-links'>
                            <ul>
                                <li>
                                    <Link to="/"><BsTwitterX /></Link>
                                </li>
                                <li>
                                    <Link to="/"><BsFacebook /></Link>
                                </li>
                                <li>
                                    <Link to="/"><BsInstagram /></Link>
                                </li>
                                <li>
                                    <Link to="/"><BsLinkedin /></Link>
                                </li>
                            </ul>
                        </nav>

                    </div>
                    <div className="col-lg-2 col-md-12 sec-col">
                        <div className="f-title">
                            Quick Link
                        </div>
                        <nav className='f-menu'>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/services">Services</Link>
                                </li>
                                <li>
                                    <Link to="/portfolio">Portfolio</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li>
                                    <Link to="/">Privacy Policy</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-2 col-md-12 third-col">
                        <div className="f-title">
                            Our Services
                        </div>
                        <nav className='f-menu sec'>
                            <ul>
                                <li>
                                    <Link to="#">Web Design</Link>
                                </li>
                                <li>
                                    <Link to="#">Web Development</Link>
                                </li>
                                <li>
                                    <Link to="#">Product Management</Link>
                                </li>
                                <li>
                                    <Link to="#">Marketing</Link>
                                </li>
                                <li>
                                    <Link to="#">Graphic Design</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3 col-md-12 last-col">
                        <div className="f-title">
                            Contact Us
                        </div>

                        <p>
                            A108 Adam Street<br />

                            New York, NY 535022<br />

                            United States<br />

                            Phone: <Link to="tel:+1 5589 55488 55">+1 5589 55488 55</Link><br />

                            Email: <Link to="mailto:info@example.com">info@example.com</Link>
                        </p>
                    </div>

                    <div className="w-100 d-none d-md-block"></div>


                </div>
            </div>
            <div className="col-12 footer-section">
                <p>&copy; {currentYear} Passion. All rights reserved.</p>
            </div>
        </footer>
    )
}
export default Footer;