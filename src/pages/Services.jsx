import { BsCodeSlash, BsPalette, BsArrowRight, BsGraphUpArrow, BsShieldCheck, BsCloudUpload } from "react-icons/bs";
const Services = () => {
    return (
        <>
            <section className="container contact-page inner-page">
                <h1 className="page-title">Services</h1>
                <p className="sumry">CHECK OUR SERVICES</p>
            </section>

            <div className="container services-page">

                <div className="row gy-5">

                    <div className="col-lg-6 col-md-6">
                        <div className="service-card featured">
                            <div className="service-icon">
                                <i className="bi bi-code-slash"><BsCodeSlash /></i>
                            </div>
                            <div className="service-content">
                                <h3><a href="service-details.html">Web Development</a></h3>
                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec rutrum congue leo eget malesuada.</p>
                                <div className="service-meta">
                                    <span className="badge popular">Most Popular</span>
                                    <span className="price">Starting at $2,999</span>
                                </div>
                                <a href="service-details.html" className="btn-cta">
                                    <span>Get Started</span>
                                    <i className="bi bi-arrow-right"><BsArrowRight /></i>
                                </a>
                            </div>
                            <div className="service-bg"></div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="bi bi-palette"><BsPalette /></i>
                            </div>
                            <div className="service-content">
                                <h3><a href="service-details.html">UI/UX Design</a></h3>
                                <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar.</p>
                                <div className="service-meta">
                                    <span className="price">Starting at $1,899</span>
                                </div>
                                <a href="service-details.html" className="btn-cta">
                                    <span>Learn More</span>
                                    <i className="bi bi-arrow-right"><BsArrowRight /></i>
                                </a>
                            </div>
                            <div className="service-bg"></div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="service-card compact">
                            <div className="service-icon">
                                <i className="bi bi-graph-up-arrow"><BsGraphUpArrow /></i>
                            </div>
                            <div className="service-content">
                                <h3><a href="service-details.html">Digital Marketing</a></h3>
                                <p>Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                                <a href="service-details.html" className="btn-cta">
                                    <span>Explore</span>
                                    <i className="bi bi-arrow-right"><BsArrowRight /></i>
                                </a>
                            </div>
                            <div className="service-bg"></div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="service-card compact">
                            <div className="service-icon">
                                <i className="bi bi-shield-check"><BsShieldCheck /></i>
                            </div>
                            <div className="service-content">
                                <h3><a href="service-details.html">Security Solutions</a></h3>
                                <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar vel. Sed porttitor lectus nibh vestibulum ac diam sit.</p>
                                <a href="service-details.html" className="btn-cta">
                                    <span>Discover</span>
                                    <i className="bi bi-arrow-right"><BsArrowRight /></i>
                                </a>
                            </div>
                            <div className="service-bg"></div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="service-card compact">
                            <div className="service-icon">
                                <i className="bi bi-cloud-upload"><BsCloudUpload /></i>
                            </div>
                            <div className="service-content">
                                <h3><a href="service-details.html">Cloud Services</a></h3>
                                <p>Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.</p>
                                <a href="service-details.html" className="btn-cta">
                                    <span>Get Quote</span>
                                    <i className="bi bi-arrow-right"><BsArrowRight /></i>
                                </a>
                            </div>
                            <div className="service-bg"></div>
                        </div>
                    </div>

                </div>

                <div className="stats-highlight">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="stat-item">
                                <div className="stat-number">500+</div>
                                <div className="stat-label">Projects Completed</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="stat-item">
                                <div className="stat-number">98%</div>
                                <div className="stat-label">Client Satisfaction</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="stat-item">
                                <div className="stat-number">24/7</div>
                                <div className="stat-label">Support Available</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="stat-item">
                                <div className="stat-number">5+</div>
                                <div className="stat-label">Years Experience</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Services
