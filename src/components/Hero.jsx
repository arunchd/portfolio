import heroImage from '../assets/bg-14.webp'
import { BsShieldCheck, BsSpeedometer2, BsPeople, BsAward } from "react-icons/bs";
export const Hero = () => {
    return (
        <>
            <div id='hero' className="container-fluid Hero-Section hero">
                <div className='container'>
                    <div className="hero-background">
                        <img src={heroImage} alt="Hero-image" />
                        <div className="overlay"></div>
                    </div>
                    <div className="row hero-content-section">
                        <div className="col-lg-6 col-md-12 hero-content">
                            <div className="hero-content">
                                <span className="hero-badge">Innovative Solutions</span>
                                <h1>Transform Your Business with Modern Technology</h1>
                                <p>Modern technology refers to the practical application of scientific knowledge to create tools, systems, and digital solutions that solve complex human problems. It drives unprecedented global connectivity, healthcare breakthroughs, and industrial automation, fundamentally reshaping how we live, work, and communicate every single day</p>
                                <div className="hero-actions">
                                    <a href="#services" className="btn-primary">Explore Services</a>
                                    <a target='_blank' href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="btn-secondary glightbox">
                                        <i className="bi bi-play-circle"></i>
                                        <span>Watch Demo</span>
                                    </a>
                                </div>
                                <div className="hero-stats">
                                    <div className="stat-item">
                                        <span className="stat-number">500+</span>
                                        <span className="stat-label">Projects Completed</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-number">98%</span>
                                        <span className="stat-label">Client Satisfaction</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-number">24/7</span>
                                        <span className="stat-label">Support Available</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-12 ">
                            <div className="hero-visual">
                                <div className="row g-3">
                                    <div className="col-6">
                                        <div className="feature-card">
                                            <i className="bi BsShieldCheck"><BsShieldCheck />
                                            </i>
                                            <span>Secure &amp; Reliable</span>
                                        </div>
                                        <div className="feature-card">
                                            <i className="bi bi-people"><BsPeople /></i>
                                            <span>Expert Team</span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="feature-card">
                                            <i className="bi bi-speedometer2"><BsSpeedometer2 /></i>
                                            <span>High Performance</span>
                                        </div>
                                        <div className="feature-card">
                                            <i className="bi bi-award"><BsAward /></i>
                                            <span>Award Winning</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

