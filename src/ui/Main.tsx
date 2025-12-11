import { useEffect, useState } from "react";

function Main() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const LOCATION_KEY = "322722"; // Dnipro

    const url = `https://dataservice.accuweather.com/forecasts/v1/daily/1day/${LOCATION_KEY}?apikey=${API_KEY}`;

    const options = {
      method: "GET",
    };

    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((err) => console.error("Error retrieving AccuWeather data:", err));
  }, []);

  return (
    <main>
      <h1>Прогноз погоди для Дніпра 🌤️</h1>
      {weatherData ? (
        <WeatherDisplay data={weatherData} />
      ) : (
        <p>Завантаження даних...</p>
      )}
    </main>
  );
}

function WeatherDisplay({ data }) {
  if (!data || !data.DailyForecasts || data.DailyForecasts.length === 0) {
    return <p>Немає даних для відображення.</p>;
  }

  function fahrenheitToCelsius(fahrenheitValue: number) {
    return Math.round(((fahrenheitValue - 32) * 5) / 9);
  }

  const forecast = data.DailyForecasts[0];
  const headline = data.Headline.Text;
  const maxTemp = fahrenheitToCelsius(forecast.Temperature.Maximum.Value);
  const minTemp = fahrenheitToCelsius(forecast.Temperature.Minimum.Value);

  return (
    <div>
      <h2>{headline}</h2>
      <p>Дата: {new Date(forecast.Date).toLocaleDateString()}</p>
      <p>🌡️ Максимальна температура: {maxTemp}°C</p>
      <p>🥶 Мінімальна температура: {minTemp}°C</p>
      <p>☀️ Вдень: {forecast.Day.IconPhrase}</p>
      <p>🌙 Вночі: {forecast.Night.IconPhrase}</p>
    </div>
  );
}

export default Main;
