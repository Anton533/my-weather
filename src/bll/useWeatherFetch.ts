import { useEffect, useState } from "react";

import { getWeatherByDay } from "../dal/api";
import { type getWeatherData } from "../dal/api.ts";

import { getWeatherByHours } from "../dal/api.ts";

export function useWeatherFetch(days: number) {
  const [weatherData, setWeatherData] = useState<getWeatherData | null>(null);

  useEffect(() => {
    getWeatherByDay(days)
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((err) => console.error("Error retrieving AccuWeather data:", err));
  }, [days]);

  return { weatherData };
}

export function useWeatherFetchHours() {
  const [weatherHoursData, setWeatherHoursData] = useState(null);

  useEffect(() => {
    getWeatherByHours()
      .then((data) => {
        console.log(data);
        setWeatherHoursData(data);
      })
      .catch((err) => console.error("Error retrieving AccuWeather data:", err));
  }, []);

  return { weatherHoursData };
}
