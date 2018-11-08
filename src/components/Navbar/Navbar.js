import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return(
                <nav className="navbar navbar-expand-lg">
                    <Link className="navbar-brand mx-auto" to="/">
                    Nanette
                    </Link>
                </nav>
        );
    };
};

export default Navbar;