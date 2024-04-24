import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Weatherset from './Components/Weatherset';

function App() {
  const [city, setcity] = useState("Delhi");
  const [data, setdata] = useState({});

  const input = () => {
    let data = document.getElementById("input").value;
    let input = document.getElementById("head").innerHTML = data;
    console.log(input);
    setcity(input);
  }

  useEffect(() => {
    const fetchapi = async () => {

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ee1229a15bc5fff8d7f2cb4b684dc797`;
      const response = await fetch(url);
      const resjson = await response.json();
      setdata(resjson);
      console.log(resjson);
    };
    fetchapi();
  }, [city]);

  return (
    <body className='body'>
      <>
        <Navbar input={input} />
        <h1 style={{ textAlign: "center", fontFamily: "sans-serif", color: "rgba(3, 22, 54, 0.662)" }}> Weather Report of Your City</h1>
        <Weatherset city={city} Temperature={((data?.main?.temp) - 273).toFixed(2)} humidity={data?.main?.humidity} windspeed={data?.wind?.speed} Feels_Like={((data?.main?.feels_like) - 273).toFixed(2)} clouds={data?.clouds?.all} />
      </>
    </body>
  );
}

export default App;
