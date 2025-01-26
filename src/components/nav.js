import React, { useState } from 'react';

function Nav() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light site-navbar-target ${isNavOpen ? 'show' : ''}`} id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="index.html">K.P.Sriram</a>
                    <button className="navbar-toggler" type="button" onClick={toggleNav}>
                        <i className="navbar-brand nav-brand">EXPLORE</i>
                    </button>
                    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><a href="#home-section" className="nav-link" onClick={toggleNav}><span>Home</span></a></li>
                            <li className="nav-item"><a href="#about-section" className="nav-link" onClick={toggleNav}><span>About</span></a></li>
                            <li className="nav-item"><a href="#skills-section" className="nav-link" onClick={toggleNav}><span>Skills</span></a></li>
                            <li className="nav-item"><a href="#projects-section" className="nav-link" onClick={toggleNav}><span>Projects</span></a></li>
                            <li className="nav-item"><a href="#contact-section" className="nav-link" onClick={toggleNav}><span>Contact</span></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
