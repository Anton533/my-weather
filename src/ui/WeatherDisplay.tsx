import { type WeatherDisplayData, type DayItem } from "../dal/api.ts";

export function WeatherDisplay({ data, dataHours }: WeatherDisplayData) {
  if (!data || !data.DailyForecasts || data.DailyForecasts.length === 0) {
    return <p>There is no data to display...</p>;
  }

  function fahrenheitToCelsius(fahrenheitValue: number) {
    return Math.round(((fahrenheitValue - 32) * 5) / 9);
  }

  const forecasts = data.DailyForecasts;
  const headline = data.Headline.Text;

  /////////

  return (
    <>
      {dataHours && dataHours.length > 0 ? (
        <div className="hourly-list">
          {dataHours.map((hour) => {
            const formattedTime = new Date(hour.DateTime).toLocaleTimeString(
              "uk-UA",
              {
                hour: "2-digit",
                minute: "2-digit",
              }
            );

            return (
              <div key={hour.EpochDateTime} className="hourly-list__item">
                <div>
                  <p>{formattedTime}</p>
                  <p className="hourly-list__item-temp">
                    {fahrenheitToCelsius(hour.Temperature.Value)}
                    {"°"}
                  </p>
                </div>

                <div>
                  <svg
                    className="precip-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 16">
                    <path
                      fill="none"
                      fillRule="nonzero"
                      stroke="#007bff"
                      strokeWidth=".714"
                      d="M5.532.891c1.723.952 5.315 5.477 5.775 8.756.028 1.718-.534 3.101-1.45 4.082C8.888 14.766 7.52 15.357 6 15.357a5.532 5.532 0 0 1-3.74-1.425c-.975-.89-1.587-2.124-1.616-3.49.503-4.035 4.013-8.49 4.888-9.551Zm-1.815 7.33a.336.336 0 0 0-.025.043c-.322.62-.59 1.255-.695 2.207.012.408.143.787.358 1.111.234.352.568.641.96.839.035.017.071.021.106.017a.201.201 0 0 0 .104-.044l.01-.005-.078-.1c-.328-.415-.82-1.067-.82-1.946 0-.752.076-1.613.08-2.121Z"></path>
                  </svg>
                  {hour.PrecipitationProbability} %
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        "Loading hourly forecast..."
      )}

      <h2>{headline}</h2>
      <ul>
        {forecasts.map((forecast: DayItem) => {
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

function getDayOfWeek(dateString: string) {
  const date = new Date(dateString);

  const options = {
    weekday: "long" as const,
  };

  return date.toLocaleDateString("uk-UA", options);
}
