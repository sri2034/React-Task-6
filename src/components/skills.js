import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';

function ProgressCircle({ label, percentage }) {
    return (
        <div className="bg-white rounded-lg shadow p-4">
            <div className="text-center">
                <h2 className="h5 font-weight-bold mb-4">{label}</h2>
            </div>
            <div className="progress-circle text-center">
                <div style={{ width: '100px', height: '100px', margin: '0 auto' }}>
                    <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                    />
                </div>
            </div>
        </div>
    );
}

function Skills() {
    return (
        <section style={{marginTop:'100px',padding:'100px'}} className="bg-light" id="skills-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 heading-section text-center">
                        <span className="subheading">Skills</span>
                        <h2 className="mb-4">My Skills</h2>
                        <p>I think the following skills I developed can help you to choose me for your company</p>
                    </div>
                    </div>
                        <h3 className='text-center'>Programming Languages</h3>
                        <div className="row progress-circle mb-5">
                            <div className="col-lg-4 col-sm-auto col-md-auto mb-4">
                                <ProgressCircle label="Java" percentage={90} />
                            </div>
                            <div className="col-lg-4 col-sm-auto col-md-auto mb-4">
                                <ProgressCircle label="Python" percentage={80} />
                            </div>
                            <div className="col-lg-4 col-sm-auto col-md-auto mb-4">
                                <ProgressCircle label="MySQL" percentage={90} />
                            </div>
                        </div>
                    <div>
                        <h3 className='text-center'>Web Development</h3>
                        <div className="row progress-circle mb-5">
                            <div className="col-lg-4 col-sm-auto col-md-auto mb-4">
                                <ProgressCircle label="HTML" percentage={95} />
                            </div>
                            <div className="col-lg-4 col-sm-auto col-md-auto mb-4">
                                <ProgressCircle label="CSS" percentage={90} />
                            </div>
                            <div className="col-lg-4 col-sm-auto col-md-auto mb-4">
                                <ProgressCircle label="JavaScript" percentage={90} />
                            </div>
                            <div className="col-lg-4 col-sm-auto col-md-auto mb-4">
                                <ProgressCircle label="PHP" percentage={90} />
                            </div>
                            <div className="col-lg-4 col-sm-auto col-md-auto mb-4">
                                <ProgressCircle label="React JS" percentage={85} />
                            </div>
                            <div className="col-lg-4 col-sm-auto col-md-auto mb-4">
                                <ProgressCircle label="Node JS" percentage={85} />
                            </div>
                            <div className="col-lg-4 col-sm-auto col-md-auto mb-4">
                                <ProgressCircle label="Express JS" percentage={85} />
                            </div>
                            <div className="col-lg-4 col-sm-auto col-md-auto mb-4">
                                <ProgressCircle label="Mongo DB" percentage={95} />
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default Skills;
