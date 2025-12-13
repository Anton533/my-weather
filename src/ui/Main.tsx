import { useWeatherFetch } from "../bll/useWeatherFetch";
import { WeatherDisplay } from "../ui/WeatherDisplay";

function Main() {
  const { weatherData } = useWeatherFetch();

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

export default Main;
