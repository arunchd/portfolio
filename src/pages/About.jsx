import { BsAward } from 'react-icons/bs'
import AboutImg from '../assets/about-5.webp'
import TeamMember1 from '../assets/person-m-1.webp'
import TeamMember7 from '../assets/person-m-9.webp'
import TeamMember12 from '../assets/person-f-12.webp'
import TeamMember10 from '../assets/person-f-10.webp'

const About = () => {
    return (
        <>
            <section className="container about-page inner-page">
                <h1 className="page-title">About</h1>
                <p className="sumry">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </section>
            <section id="about" className="about section">

                <div className="container">

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="content">
                                <h2>Transforming Ideas Into Reality Since 2011</h2>
                                <p className="lead">We are a passionate team of innovators dedicated to creating exceptional digital experiences that drive meaningful results for businesses worldwide.</p>
                                <p>Our journey began with a simple vision: to bridge the gap between cutting-edge technology and human-centered design. Today, we've grown into a trusted partner for companies seeking to transform their digital presence and accelerate their growth.</p>
                                <p>Through collaborative partnerships and innovative solutions, we've helped hundreds of organizations achieve their goals while building lasting relationships founded on trust, transparency, and exceptional results.</p>

                                <div className="stats-container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="stat-item">
                                                <div className="number">14+</div>
                                                <div className="label">Years Experience</div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="stat-item">
                                                <div className="number">650+</div>
                                                <div className="label">Projects Completed</div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="stat-item">
                                                <div className="number">35</div>
                                                <div className="label">Team Members</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="cta-wrapper">
                                    <a href="#portfolio" className="btn btn-primary">Discover Our Work</a>
                                    <a href="#team" className="btn btn-outline">Meet Our Team</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="image-wrapper">
                                <img src={AboutImg} alt="About Us" className="img-fluid main-image" />
                                <div className="floating-card">
                                    <div className="card-content">
                                        <i className="bi bi-award"><BsAward /></i>
                                        <div className="text">
                                            <h5>Excellence Award</h5>
                                            <span>Digital Innovation 2025</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* Team Section */}

            <section id="team" className="team section">
                <div className="container">

                    <div className="section-title">
                        <h2 className='page-title'>Our Team</h2>
                        <p className='text-center'>Meet the talented individuals behind our success</p>
                    </div>

                    {/* Team members will be displayed here */}

                    <div className="card-group">
                        <div className="card">
                            <img src={TeamMember1} className="card-img-top" alt="Team Member 1" />
                            <div className="card-body">
                                <h5 className="card-title">Marcus Wilson</h5>
                                <span className="card-text">Marketing Director</span>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={TeamMember7} className="card-img-top" alt="Team Member 7" />
                            <div className="card-body">
                                <h5 className="card-title">John Doe</h5>
                                <span className="card-text">Chief Technology Officer</span>
                                <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                            </div>
                        </div>
                        <div className="card">
                            <img src={TeamMember12} className="card-img-top" alt="Team Member 12" />
                            <div className="card-body">
                                <h5 className="card-title">Jane Smith</h5>
                                <span className="card-text">Sales Manager</span>
                                <p className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={TeamMember10} className="card-img-top" alt="Team Member 10" />
                            <div className="card-body">
                                <h5 className="card-title">Sophia Reynolds</h5>
                                <span className="card-text">Product Designer</span>
                                <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default About
