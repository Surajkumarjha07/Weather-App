import React from "react";
import './Navbar.css';

function WeatherCard2(props) {
    return (
        <section className="section3">
            <h1 style={{paddingTop:"40px"}} >{props.weatherdata}</h1>
            <p id="par">{props.citydata}</p>
        </section>
    )
}

export default WeatherCard2;