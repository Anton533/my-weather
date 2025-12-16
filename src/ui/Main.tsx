import { WeatherDisplay } from "../ui/WeatherDisplay";
import { type WeatherDisplayData } from "../dal/api.ts";

function Main({ weatherData, weatherHoursData }: WeatherDisplayData) {
  return (
    <main>
      <h1 className="title">Прогноз погоди для Дніпра 🌤️</h1>
      {weatherData ? (
        <WeatherDisplay data={weatherData} dataHours={weatherHoursData} />
      ) : (
        <p>Loading data...</p>
      )}
    </main>
  );
}

export default Main;
