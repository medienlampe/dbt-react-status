import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Clock(props) {
  const [weather, setWeather] = useState({
    coord: {
      lon: 12.37,
      lat: 51.34
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01n"
      }
    ],
    base: "stations",
    main: {
      temp: 10.3,
      pressure: 1022,
      humidity: 75,
      temp_min: 3,
      temp_max: 5
    },
    visibility: 10000,
    wind: {
      speed: 4.1,
      deg: 170
    },
    clouds: {
      all: 0
    },
    dt: 1550443800,
    sys: {
      type: 1,
      id: 1273,
      message: 0.0038,
      country: "DE",
      sunrise: 1550384342,
      sunset: 1550421042
    },
    id: 2879139,
    name: "Leipzig",
    cod: 200
  });

  async function updateWeather() {
    const result = await axios(
      "https://openweathermap.org/data/2.5/weather/?appid=b6907d289e10d714a6e88b30761fae22&id=2879139&units=metric"
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

  return (
    <div id="weather">
      Wetter in {weather.name}: {Math.ceil(weather.main.temp)}°C,{" "}
      {weather.clouds.all < 10 ? "wolkenlos" : weather.clouds.all + "% bewölkt"}
    </div>
  );
}
