import { BsGeoAlt, BsTelephone, BsClock, BsEnvelope } from "react-icons/bs";

const Contact = () => {
    return (
        <>
            <section className="container contact-page inner-page">
                <h1 className="page-title">Contact Us</h1>
                <p className="sumry">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </section>
            <div className="container">
                <section className="row main-contact">
                    <div className="col-lg-6 col-md-12 map-wrapper">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.361281103485!2d-74.00871262476745!3d40.71006263773552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown.%20Conference%20Center!5e0!3m2!1sen!2sin!4v1782569874701!5m2!1sen!2sin" width="100%" height="100%" style={{ border: "0", borderRadius: "16px" }} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>

                    </div>


                    <div className="col-lg-6 col-md-12 contact-content">
                        <div className="contact-address">
                            <div className="contact-card">
                                <div className="icon-box">
                                    <i className="bi bi-geo-alt"><BsGeoAlt /></i>
                                </div>
                                <div className="contact-text">
                                    <h4>Location</h4>
                                    <p>8721 Broadway Avenue, New York, NY 10023</p>
                                </div>
                            </div>

                            <div className="contact-card">
                                <div className="icon-box">
                                    <i className="bi bi-envelope"><BsEnvelope /></i>
                                </div>
                                <div className="contact-text">
                                    <h4>Email</h4>
                                    <p>info@examplecompany.com</p>
                                </div>
                            </div>

                            <div className="contact-card">
                                <div className="icon-box">
                                    <i className="bi bi-telephone"><BsTelephone /></i>
                                </div>
                                <div className="contact-text">
                                    <h4>Call</h4>
                                    <p>+1 (212) 555-7890</p>
                                </div>
                            </div>

                            <div className="contact-card">
                                <div className="icon-box">
                                    <i className="bi bi-clock"><BsClock /></i>
                                </div>
                                <div className="contact-text">
                                    <h4>Open Hours</h4>
                                    <p>Monday-Friday: 9AM - 6PM</p>
                                </div>
                            </div>
                        </div>


                        <div className="contact-form-container">
                            <h3>Get in Touch</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing.</p>

                            <form action="" method="post" className="contact-form">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required="" />
                                    </div>
                                    <div className="col-lg-6 col-md-12 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required="" />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required="" />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Message" required=""></textarea>
                                </div>

                                <div className="form-submit">
                                    <button type="submit">Send Message</button>
                                    <div className="social-links">
                                        <a href="#"><i className="bi bi-twitter"></i></a>
                                        <a href="#"><i className="bi bi-facebook"></i></a>
                                        <a href="#"><i className="bi bi-instagram"></i></a>
                                        <a href="#"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>


                </section>
            </div>
        </>
    )
}

export default Contact
