import React from "react";
import WeatherCard from "./WeatherCard";
import WeatherCard2 from "./WeatherCard2";

function Weatherset(props) {
    return (
        <>
        <section style={{display:"inline-flex",width:"1050px"}}>
            <WeatherCard city = {props.city} Temperature={props.Temperature} />
            <WeatherCard2 weatherdata="Humidity" citydata={props.humidity} id={props.id}/>
            <WeatherCard2 weatherdata="Wind Speed" citydata={props.windspeed} id={props.id}/>
        </section>

        <section style={{display:"inline-flex",marginLeft:"525px",width : "500px",marginTop:"-150px"}}>
        <WeatherCard2 weatherdata="FeelsLike" citydata={props.Feels_Like} id={props.id}/>
        <WeatherCard2 weatherdata="Clouds" citydata={props.clouds} id={props.id}/>
        </section>
        </>
    )
}

export default Weatherset;