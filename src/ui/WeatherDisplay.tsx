import { type getWeather } from "../dal/api.ts";

function getDayOfWeek(dateString: string) {
  const date = new Date(dateString);

  const options = {
    weekday: "long",
  };

  return date.toLocaleDateString("uk-UA", options);
}

export function WeatherDisplay({ data }: getWeather) {
  if (!data || !data.DailyForecasts || data.DailyForecasts.length === 0) {
    return <p>Немає даних для відображення.</p>;
  }

  function fahrenheitToCelsius(fahrenheitValue: number) {
    return Math.round(((fahrenheitValue - 32) * 5) / 9);
  }

  const forecasts = data.DailyForecasts;
  const headline = data.Headline.Text;

  return (
    <>
      <h2>{headline}</h2>
      <ul>
        {forecasts.map((forecast) => {
          const dayName = getDayOfWeek(forecast.Date).toLocaleUpperCase();

          const maxTemp = fahrenheitToCelsius(
            forecast.Temperature.Maximum.Value
          );
          const minTemp = fahrenheitToCelsius(
            forecast.Temperature.Minimum.Value
          );
          return (
            <li key={forecast.EpochDate} className="day">
              <p>{dayName}</p>
              <p>Дата: {new Date(forecast.Date).toLocaleDateString()}</p>
              <p>🌡️ Максимальна температура: {maxTemp}°C</p>
              <p>
                🥶 Мінімальна температура: {minTemp}
                °C
              </p>
              <p>☀️ Вдень: {forecast.Day.IconPhrase}</p>
              <p>🌙 Вночі: {forecast.Night.IconPhrase}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
