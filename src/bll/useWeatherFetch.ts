import { useEffect, useState } from "react";

import { getWeatherByDay } from "../dal/api";
import { type getWeatherData } from "../dal/api.ts";

import { getWeatherByHours } from "../dal/api.ts";

import { getLocationByGeoposition } from "../dal/api.ts";

export function useWeatherFetch(days: number, key: number) {
  const [weatherData, setWeatherData] = useState<getWeatherData | null>(null);

  useEffect(() => {
    getWeatherByDay(days, key)
      .then((data) => {
        // console.log(data);
        setWeatherData(data);
      })
      .catch((err) => console.error("Error retrieving AccuWeather data:", err));
  }, [days, key]);

  return { weatherData };
}

export function useWeatherFetchHours(key: number) {
  const [weatherHoursData, setWeatherHoursData] = useState(null);

  useEffect(() => {
    getWeatherByHours(key)
      .then((data) => {
        // console.log(data);
        setWeatherHoursData(data);
      })
      .catch((err) => console.error("Error retrieving AccuWeather data:", err));
  }, [key]);

  return { weatherHoursData };
}

/////////////////////

const KHARKIV_COORDS = { lat: 50.0211959, lon: 36.3684928 };

export function useLocationByGeoposition() {
  const [key, setKey] = useState(349727);
  const [locationName, setLocationName] = useState("New York");

  useEffect(() => {
    const fetchKey = (lat: number, lon: number) => {
      getLocationByGeoposition(lat, lon)
        .then((data) => {
          console.log(data);
          if (data && data.Key) {
            setKey(data.Key);
            setLocationName(
              data.AdministrativeArea.LocalizedName || data.LocalizedName
            );
            console.log(
              "Location key received:",
              data.Key,
              data.AdministrativeArea.LocalizedName
            );
          }
        })
        .catch((err) => console.error("Error while retrieving key:", err));
    };

    if (!navigator.geolocation) {
      console.warn("Geolocation is not supported by the browser.");
      fetchKey(KHARKIV_COORDS.lat, KHARKIV_COORDS.lon);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Coordinates received successfully");
        fetchKey(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        console.warn(
          "Geolocation did not work, we are using Kharkiv:",
          error.message
        );
        fetchKey(KHARKIV_COORDS.lat, KHARKIV_COORDS.lon);
      },
      {
        timeout: 10000,
        enableHighAccuracy: false,
        maximumAge: 60000,
      }
    );
  }, []);

  return { key, locationName };
}
