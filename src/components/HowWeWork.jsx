import { BsSearch, BsLightbulb, BsGear, BsRocketTakeoff, BsArrowRightCircleFill } from "react-icons/bs";

const HowWeWork = () => {
    return (
        <>
            <section id="how-we-work" className="how-we-work section">


                <div className="container section-title">
                    <h4>How We Work</h4>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>

                <div className="container">

                    <div className="steps-grid">
                        <div className="step-card">
                            <div className="step-icon">
                                <i className="bi bi-search"><BsSearch /></i>
                            </div>
                            <div className="step-number">Step 1</div>
                            <h3>Research &amp; Planning</h3>
                            <p>Nulla facilisi morbi tempus iaculis urna id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.</p>
                            <div className="step-arrow">
                                <i className="bi bi-arrow-right"><BsArrowRightCircleFill /></i>
                            </div>
                        </div>

                        <div className="step-card">
                            <div className="step-icon">
                                <i className="bi bi-lightbulb"><BsLightbulb /></i>
                            </div>
                            <div className="step-number">Step 2</div>
                            <h3>Creative Solutions</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                            <div className="step-arrow">
                                <i className="bi bi-arrow-right"><BsArrowRightCircleFill /></i>
                            </div>
                        </div>

                        <div className="step-card">
                            <div className="step-icon">
                                <i className="bi bi-gear"><BsGear /></i>
                            </div>
                            <div className="step-number">Step 3</div>
                            <h3>Development</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            <div className="step-arrow">
                                <i className="bi bi-arrow-right"><BsArrowRightCircleFill /></i>
                            </div>
                        </div>

                        <div className="step-card">
                            <div className="step-icon">
                                <i className="bi bi-rocket-takeoff"><BsRocketTakeoff /></i>
                            </div>
                            <div className="step-number">Step 4</div>
                            <h3>Launch &amp; Support</h3>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.</p>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default HowWeWork
