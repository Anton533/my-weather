import { WeatherDisplay } from "../ui/WeatherDisplay";
import { type WeatherDisplayData } from "../dal/api.ts";

function Main({ weatherData }: WeatherDisplayData) {
  return (
    <main>
      <h1>Прогноз погоди для Дніпра 🌤️</h1>
      {weatherData ? (
        <WeatherDisplay data={weatherData} />
      ) : (
        <p>Loading data...</p>
      )}
    </main>
  );
}

export default Main;
