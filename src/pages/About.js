import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../components/Background.css";
import "../components/About.css";

const About = () => (
    <div>
        <Navbar />
            <div>
                <div className="container abt-container">

                    {/* img of myself lol */}
                    <img alt="profile pic" className="rounded-circle" id="aboutMeIMG" src="https://avatars0.githubusercontent.com/u/39708165?s=460&v=4" align="left" />
                    <br />

                    {/* stuff abt me */}
                    <p className="abtmetxt">
                        I was originally pursuing a career as a pharmacist, studying biology at St. Mary's University.
                        In an effort to gain more insight of what the future would hold, 
                        I got a job as a pharmacy technician at CVS Pharmacy.
                        This was the wake-up call I desperately needed. 
                        What made me gravitate towards the CS field is the promise of constant change and the opportunity
                        to be around like-minded individuals that will help nourish my creativity. 
                        Through the years I've learned that I truly thrive when put in situations where adaptability is crucial for advancement and 
                        where creativity is encouraged rather than supressed.
                        I'm eager to begin my journey as a web developer and build upon the knowledge I've learned as well as the connections I've made.
                    </p>

                    <hr />

                    {/* List for technologies: */}
                    <h4 className="text-center technologies">
                        Technologies Learned:
                    </h4>
                    <br />

                    <div className="row">
                        <div className="col s6 m6">
                            <ul className="list-group first-list">
                                <li className="list-group-item">Javascript (ES6)</li>
                                <li className="list-group-item">CSS3</li>
                                <li className="list-group-item">HTML5</li>
                                <li className="list-group-item">NodeJS + NPM</li>
                                <li className="list-group-item">ReactJS</li>
                                <li className="list-group-item">ExpressJS</li>
                            </ul>
                        </div>

                        <div className="col s6 m6">
                            <ul className="list-group second-list">
                                <li className="list-group-item">HandlebarsJS</li>
                                <li className="list-group-item">MongoJS</li>
                                <li className="list-group-item">MongoDB</li>
                                <li className="list-group-item">mySQL</li>
                                <li className="list-group-item">jQuery</li>
                                <li className="list-group-item">Git</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        <Footer />
    </div>
);

export default About;