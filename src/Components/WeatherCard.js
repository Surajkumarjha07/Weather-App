import React from "react";
import './Navbar.css';

function WeatherCard(props) {
    return (
        <section className="section2">
            <h1 style={{paddingTop:"40px"}} id="head">{props.city}</h1>
            <p id="par">{props.Temperature}  ℃</p>
        </section>
    )
}

export default WeatherCard;