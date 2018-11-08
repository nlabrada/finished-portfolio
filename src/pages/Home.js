import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../components/Home.css";
import "../components/Background.css";

class Home extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <div className="bgImg">
                        <div className="btn-group-vertical center">
                            <Link to="/about">
                                <button type="abt-btn" className="btn homebtns">
                                    ABOUT ME
                                </button>
                            </Link>
                            <hr />
                            <Link to="/portfolio">
                                <button type="port-btn" className="btn homebtns">
                                    PORTFOLIO
                                </button>
                            </Link>
                        </div>
                </div>
                <Footer />                    
            </div>
        )
    }
}

export default Home;

