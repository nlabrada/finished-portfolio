import React from "react";
import "./Cards.css";

const Cards = (props) => (
        <div className="container port-container">
            <div className="card">
                <img id={props.id} className="card-img-top" src={require(`../../images/${props.img}`)} alt={props.id} />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href={props.link} className="btn card-btns" target="_blank" rel="noopener noreferrer">Go!</a>
                </div>
            </div>
        </div>             
);

export default Cards;