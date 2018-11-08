import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import projects from "../projects.json";

class Portfolio extends Component {
    state = {
        projects,
    };

    render() {
        return(
            <div>
                <Navbar />
                {this.state.projects.map(p => (
                    <Cards 
                        key={p.key}
                        id={p.id}
                        name={p.name}
                        img={p.img}
                        text={p.text}
                        link={p.link}
                    />
                ))}
                <Footer />
            </div>
        
        )
    }

};

export default Portfolio;