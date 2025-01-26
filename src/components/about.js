import React from 'react';
import image1 from "../bg_2.jpg";

function About() {
    const backgroundStyle = {
        backgroundImage: `url(${image1})`,
        backgroundSize: '80% auto', 
        backgroundPosition: 'center center', 
    };
    return (
        <div>
            <section className="ftco-about ftco-section ftco-no-pt ftco-no-pb" id="about-section">
                <div style={{marginTop:'100px'}} className="container">
                    <div className="row d-flex no-gutters">
                        <div className="col-md-6 col-lg-5 d-flex">
                            <div className="img-about img d-flex align-items-stretch" style={backgroundStyle}>
                                <div className="overlay"></div>
                                <div className="img d-flex align-self-stretch align-items-center">
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-7 pl-md-4 pl-lg-5 py-5">
                            <div className="py-md-5">
                                <div className="row justify-content-start pb-3">
                                    <div className="col-md-12 heading-section">
                                        <span className="subheading">Personal Details</span>
                                        <h2 className="mb-4" style={{ fontSize: '34px', textTransform: 'capitalize' }}>About Me</h2>
                                        <p>Eager to do on a challenging project, through which I can leverage my skills and strengths to drive collaborative experience and success.</p>
                                        <ul className="about-info mt-4 px-md-0 px-2">
                                            <li className="d-flex"><span>Name:</span> <span>KURUKURI PAVAN SRIRAM</span></li>
                                            <li className="d-flex"><span>Date of birth:</span> <span>JULY 22, 2004</span></li>
                                            <li className="d-flex"><span>Address:</span> <span>Aratlakatta, Kakinada, Andhra Pradesh</span></li>
                                            <li className="d-flex"><span>Zip code:</span> <span>533016</span></li>
                                            <li className="d-flex"><span>Personal Email:</span> <span>pavansriramkurukuri3@gmail.com</span></li>
                                            <li className="d-flex"><span>official Email:</span> <span>pavansriram.k4@gmail.com</span></li>
                                            <li className="d-flex"><span>Phone: </span> <span>+91 93911 08156</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="my-interest d-lg-flex">
                                            <div className="interest-wrap d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="flaticon-listening"></span>
                                                </div>
                                                <div className="text">Music</div>
                                            </div>
                                            <div className="interest-wrap d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="flaticon-suitcases"></span>
                                                </div>
                                                <div className="text">Travel</div>
                                            </div>
                                            <div className="interest-wrap d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="flaticon-video-player"></span>
                                                </div>
                                                <div className="text">Movie</div>
                                            </div>
                                            <div className="interest-wrap d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="flaticon-football"></span>
                                                </div>
                                                <div className="text">Sports</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
