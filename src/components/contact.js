import React from 'react';

function Contact() {
    return (
        <div>
            <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 heading-section text-center">
                            <span className="subheading">Have an Opportunity</span>
                            <h2 className='heading'>Contact Info</h2>
                        </div>
                    </div>
                    <div className="row block-9">
                        <div className="col-md-8">
                            <form action="https://portfolio-k66z.onrender.com/submit-form" method='POST' className="bg-light p-4 p-md-5 contact-form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" name='name' className="form-control" placeholder="Your Name" required/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="email" name='email' className="form-control" placeholder="Your Email" required/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="text" name='subject' className="form-control" placeholder="Subject" required/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea name="Description" cols="30" rows="7" className="form-control" placeholder="Description" required></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group text-center">
                                            <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>

                        <div className="col-md-4 d-flex pl-md-5">
                            <div className="row">
                                <div className="dbox w-100 d-flex">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fa fa-map-marker"></span>
                                    </div>
                                    <div className="text">
                                        <p><span>Address:</span> 5-48, Main Road, Aratlakatta, Karapa mandal, Kakinada district, AP, India, 533016</p>
                                    </div>
                                </div>
                                <div className="dbox w-100 d-flex">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fa fa-phone"></span>
                                    </div>
                                    <div className="text">
                                        <p><span>Phone:</span> <a href="https://wa.me/+919391108156">+91 93911 08156</a></p>
                                    </div>
                                </div>
                                <div className="dbox w-100 d-flex">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fa fa-paper-plane"></span>
                                    </div>
                                    <div className="text">
                                        <p><span>Email:</span> <a href="mailto:pavansriramkurukuri3@gmail.com">pavansriramkurukuri3@gmail.com</a></p>
                                    </div>
                                </div>
                                <div className="dbox w-100 d-flex">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fa fa-globe"></span>
                                    </div>
                                    <div className="text">
                                        <p><span>LinkedIn</span> <a href="https://www.linkedin.com/in/kurukuri-pavan-sriram-88528627b/">https://www.linkedin.com/in/kurukuri-pavan-sriram-88528627b/</a></p>
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

export default Contact;