import { Link } from 'react-router-dom'
import featuredServicesImage from '../assets/services-9.webp'
import { BsBarChart, BsGraphUpArrow, BsShieldCheck, BsArrowRightCircle } from 'react-icons/bs'


const FServices = () => {
    return (
        <>
            <section className="container featured-services">

                <h2 className='fs-title'>Featured Services</h2>

                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-lg-0 mb-sm-5 services-content">

                        <div className="col-title"><span>Professional Services</span></div>
                        <h2>Elevating Business Performance Through Strategic Solutions</h2>
                        <p>Identify and eliminate bottlenecks to improve operational efficiency and reduce costs. Implementing standardized guidelines helps team members "work smarter, not harder"</p>

                        <Link to="/" className="fs-btn btn btn-primary">Request a Consultation</Link>
                    </div> 

                    <div className="col-lg-6 col-md-12">
                        <div className="img-block m-lg-5">
                            <img src={featuredServicesImage} alt='Featured-Services-Image' />
                        </div>
                    </div>
                </div>

                {/* Services Card */}

                <div className="row fs-card">
                    <div className="col-lg-4 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="icon-box">
                                    <i className="bi bi-BsBarChart"><BsBarChart /></i>
                                </div>
                                <h3 className="card-title">Innovation & Digital Transformation</h3>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Cras vehicula magna eget lectus varius, at finibus massa condimentum.</p>
                                <div className="service-number">01</div>
                            </div>
                            <Link to="/" className="arrow-link"><i className="bi bi-arrow-right hover-arrow"><BsArrowRightCircle /></i></Link>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="icon-box">
                                    <i className="bi bi-BsGraphUpArrow"><BsGraphUpArrow /></i>
                                </div>
                                <h5 className="card-title">Talent Management Strategy</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Cras vehicula magna eget lectus varius, at finibus massa condimentum.</p>
                                <div className="service-number">02</div>
                            </div>
                            <Link to="/" className="arrow-link"><i className="bi bi-arrow-right hover-arrow"><BsArrowRightCircle /></i></Link>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="icon-box">
                                    <i className="bi "><BsShieldCheck /></i>
                                </div>
                                <h5 className="card-title">Financial Strategy Development</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Cras vehicula magna eget lectus varius, at finibus massa condimentum.</p>
                                <div className="service-number">03</div>
                            </div>
                            <Link to="/" className="arrow-link"><i className="bi bi-arrow-right hover-arrow"><BsArrowRightCircle /></i></Link>
                        </div>
                    </div>
                </div>

            </section >
        </>
    )
}
export default FServices;