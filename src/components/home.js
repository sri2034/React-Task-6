import React from 'react';
import image1 from "../bg_1.jpg";

function Home() {
    const backgroundStyle = {
        backgroundImage: `url(${image1})`, // Use the imported image as the background
        backgroundSize: '', 
        backgroundPosition: 'center center',
    };


    return (
        <div>
            <section id="home-section" className="home">
                <div style={{padding:'70px 0px'}} className="home-slider owl-carousel">
                    <div className="slider-item">
                        <div className="overlay"></div>
                        <div className="container-fluid px-md-0">
                            <div className="row d-md-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
                                <div className="one-third order-md-last img" style={backgroundStyle}>
                                    <div className='overlay'></div>
                                    <div className="overlay-1"></div>
                                </div>
                                <div className="one-forth d-flex align-items-center">
                                    <div className="text">
                                        <span className="subheading">Hello! This is Kurukuri Pavan Sriram</span>
                                        <h1 className="mb-4 mt-3">Aspiring <span>AI/ML</span> Developer</h1>
                                        <p><a href="#contact-section" className="btn btn-primary">Connect with me</a> <a href="https://drive.google.com/file/d/1-NKv7wmMGS2pyYrxf4bgHvDKzs6xuK3k/view" className="btn btn-primary btn-outline-primary">Download Resume</a></p>
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

export default Home;
