import { useEffect, useState } from "react";
import { getWeather } from "../dal/api";

export function useWeatherFetch() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    getWeather()
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((err) => console.error("Error retrieving AccuWeather data:", err));
  }, []);

  return { weatherData };
}
