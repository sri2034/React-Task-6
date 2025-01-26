import React from 'react';
import image1 from "../ECS.jpg";
import image2 from "../project2.jpg";
import image3 from "../project3.jpg";
import image4 from "../project4.jpg";
import image5 from "../project5.jpg";
import image6 from "../project6.jpg";
import image7 from "../project7.jpg";
import image8 from "../project8.jpg";

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
    const backgroundStyle5 = {
        backgroundImage: `url(${image5})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center center', 
    };
    const backgroundStyle6 = {
        backgroundImage: `url(${image6})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center center', 
    };
    const backgroundStyle7 = {
        backgroundImage: `url(${image7})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center center', 
    };
    const backgroundStyle8 = {
        backgroundImage: `url(${image8})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center center', 
    };
    return (
        <section class="ftco-section ftco-project" id="projects-section">
            <div class="container-fluid px-md-4">
                <div class="row justify-content-center pb-5">
                    <div class="col-md-12 heading-section text-center">
                        <span class="subheading">Projects and Internships</span>
                        <h2 class="mb-4">Our Projects</h2>
                        <p>These are following Projects that I worked and Successfully developed</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <div class="project img shadow d-flex justify-content-center align-items-center" style={backgroundStyle1}>
                            <div class="overlay"></div>
                            <div class="text text-center p-4">
                                <h3><a href="#">Overspeeding alert System using Raspberry pi pico</a></h3>
                                <span>ECS Project-1</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="project img shadow d-flex justify-content-center align-items-center" style={backgroundStyle2}>
                            <div class="overlay"></div>
                            <div class="text text-center p-4">
                                <h3><a href="https://www.kaggle.com/code/pavansriram3/resnet-gender-dl">Gender Classification</a></h3>
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
                                <h3><a href="https://blogging-website-frontend.vercel.app/">Blogging Webiste</a></h3>
                                <span>MERN PROJECT</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="project img shadow d-flex justify-content-center align-items-center" style={backgroundStyle5}>
                            <div class="overlay"></div>
                            <div class="text text-center p-4">
                                <h3><a href="https://www.kaggle.com/code/pavansriram3/fork-of-shape-detector-03023e">AI & ML PROJECT for display verification of cockpit</a></h3>
                                <span>CSIR-NAL Internship</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="project img shadow d-flex justify-content-center align-items-center" style={backgroundStyle6}>
                            <div class="overlay"></div>
                            <div class="text text-center p-4">
                                <h3><a href="https://ecs-frontend-green.vercel.app/">Bus Location Tracker using Aurdino Uno </a></h3>
                                <span>ECS Project-2</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="project img shadow d-flex justify-content-center align-items-center" style={backgroundStyle7}>
                            <div class="overlay"></div>
                            <div class="text text-center p-4">
                                <h3><a href="#">Gamer's Data Visualization</a></h3>
                                <span>Data Visualization</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="project img shadow d-flex justify-content-center align-items-center" style={backgroundStyle8}>
                            <div class="overlay"></div>
                            <div class="text text-center p-4">
                                <h3><a href="https://www.kaggle.com/code/pavansriram3/capstone/">Plant weed detection using Segmentation</a></h3>
                                <span>Segmentation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
