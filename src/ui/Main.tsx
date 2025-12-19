import { WeatherDisplay } from "../ui/WeatherDisplay";
import { type WeatherDisplayData } from "../dal/api.ts";

function Main({ weatherData, weatherHoursData, city }: WeatherDisplayData) {
  return (
    <main>
      <h1 className="title">Прогноз погоди для {city} 🌤️</h1>
      {weatherData ? (
        <WeatherDisplay
          data={weatherData}
          dataHours={weatherHoursData}
          city={city}
        />
      ) : (
        <p>Loading data...</p>
      )}
    </main>
  );
}

export default Main;
