import { useEffect, useState } from "react";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";

import styles from "./weatherApp.module.css";
import WeatherMap from "./weatherMap";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  console.log({ styles });
  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]);

  async function loadInfo(city = "london") {
    try {
      const request = await fetch(
        /* `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}` */
        `${REACT_APP_URL}&key=${REACT_APP_KEY}&q=${city}`
      );

      const json = await request.json();

      setWeather(json);

      console.log(json);
    } catch (error) {}
  }

  function handleChangeCity(city) {
    setWeather(null);

    loadInfo(city);
  }

  return (
    <div className={styles.weatherContainer}>
      <div className={styles.current}>
      <WeatherForm onChangeCity={handleChangeCity} />
      <WeatherMainInfo weather={weather} />
      </div>
      <WeatherMap weather={weather} />
    </div>
  );
}
