import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Main from "./ui/Main";

import { useState } from "react";
import { useWeatherFetch } from "../src/bll/useWeatherFetch";
import { useWeatherFetchHours } from "./bll/useWeatherFetch";

function App() {
  const [days, setDay] = useState(1);
  const { weatherData } = useWeatherFetch(days);

  const { weatherHoursData } = useWeatherFetchHours();

  const handleDaySelect = (day: number | null): void => {
    setDay(day);
  };

  return (
    <>
      <Header onDaySelected={handleDaySelect} />
      <Main weatherData={weatherData} weatherHoursData={weatherHoursData} />
      <Footer />
    </>
  );
}

export default App;
