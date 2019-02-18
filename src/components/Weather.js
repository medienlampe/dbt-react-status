import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Clock(props) {
  const [weather, setWeather] = useState();

  async function updateWeather() {
    const result = await axios(
      "https://api.openweathermap.org/data/2.5/weather/?id=2879139&units=metric&appid=" +
        process.env.REACT_APP_OPENWEATHERMAP_TOKEN
    );

    setWeather(result.data);
  }

  useEffect(() => {
    updateWeather();
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => updateWeather(), 600000);

    return () => {
      clearTimeout(timer);
    };
  });

  if (weather) {
    return (
      <div id="weather">
        Wetter in {weather.name}: {Math.ceil(weather.main.temp)}°C,{" "}
        {weather.clouds.all < 10
          ? "wolkenlos"
          : weather.clouds.all + "% bewölkt"}
      </div>
    );
  }

  return <div id="weather">Wetter wird geladen...</div>;
}
