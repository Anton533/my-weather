import { useEffect, useState } from "react";
import { getWeather } from "../dal/api";
import { type getWeatherData } from "../dal/api.ts";

export function useWeatherFetch() {
  const [weatherData, setWeatherData] = useState<getWeatherData | null>(null);

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
