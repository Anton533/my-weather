import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Main from "./ui/Main";

import { useState } from "react";
import { useWeatherFetch } from "../src/bll/useWeatherFetch";
import { useWeatherFetchHours } from "./bll/useWeatherFetch";
import { useLocationByGeoposition } from "./bll/useWeatherFetch";

function App() {
  const [days, setDay] = useState(1);

  const { key, locationName } = useLocationByGeoposition();

  const { weatherData } = useWeatherFetch(days, key);
  const { weatherHoursData } = useWeatherFetchHours(key);

  const handleDaySelect = (day: number): void => {
    setDay(day);
  };

  return (
    <>
      <Header onDaySelected={handleDaySelect} activeDays={days} />
      <Main
        weatherData={weatherData}
        weatherHoursData={weatherHoursData}
        city={locationName}
      />
      <Footer />
    </>
  );
}

export default App;
