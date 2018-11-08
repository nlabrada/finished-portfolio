import React from "react";
import "./Footer.css";

const Footer = () => (
    <footer className="fixed-bottom">
        <div className="container">
            <div className="row justify-content-center ">
                {/* <div class="col" >
                <span role="img" aria-label="copyright emoji">©️</span> 2018
                </div> */}
                <div className="col col-md-2">
                    <a href="https://github.com/nlabrada" className="btn btn-lg footerbtns" role="button" target="_blank" rel="noopener noreferrer">
                        <span className="fa fa-github"></span> Github
                    </a>
                </div>
                <div className="col col-md-2">
                    <a href="https://www.linkedin.com/in/nanette-labrada-88245612a/" className="btn btn-lg footerbtns" role="button" target="_blank" rel="noopener noreferrer">
                        <span className="fa fa-linkedin"></span> Linkedin
                    </a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
