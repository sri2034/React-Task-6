import React from 'react';
import image1 from "../ECS.jpg";
import image2 from "../project2.jpg";
import image3 from "../project3.jpg";
import image4 from "../project4.jpg";



function Projects() {
    const backgroundStyle1 = {
        backgroundImage: `url(${image1})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center center', 
    };
    const backgroundStyle2 = {
        backgroundImage: `url(${image2})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
    };
    const backgroundStyle3 = {
        backgroundImage: `url(${image3})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center center', 
    };
    const backgroundStyle4 = {
        backgroundImage: `url(${image4})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center center', 
    };
    return (
        <section class="ftco-section ftco-project" id="projects-section">
            <div class="container-fluid px-md-4">
                <div class="row justify-content-center pb-5">
                    <div class="col-md-12 heading-section text-center">
                        <span class="subheading">Accomplishments</span>
                        <h2 class="mb-4">Our Projects</h2>
                        <p>These are few Projects I worked and I Successfully developed</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <div class="project img shadow d-flex justify-content-center align-items-center" style={backgroundStyle1}>
                            <div class="overlay"></div>
                            <div class="text text-center p-4">
                                <h3><a href="#">Overspeeding alert System using Raspberry pi pico</a></h3>
                                <span>ECS Project</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="project img shadow d-flex justify-content-center align-items-center" style={backgroundStyle2}>
                            <div class="overlay"></div>
                            <div class="text text-center p-4">
                                <h3><a href="#">Gender Classification</a></h3>
                                <span>Deep Learning Project</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="project img shadow d-flex justify-content-center align-items-center" style={backgroundStyle3}>
                            <div class="overlay"></div>
                            <div class="text text-center p-4">
                                <h3><a href="#">Breast Cancer Identification</a></h3>
                                <span>Machine Learning Project</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="project img shadow d-flex justify-content-center align-items-center" style={backgroundStyle4}>
                            <div class="overlay"></div>
                            <div class="text text-center p-4">
                                <h3><a href="#">On going MERN PROJECT</a></h3>
                                <span>Web Development</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;