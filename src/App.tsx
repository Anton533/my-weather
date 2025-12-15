import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Main from "./ui/Main";

import { useState } from "react";
import { useWeatherFetch } from "../src/bll/useWeatherFetch";

function App() {
  const [days, setDay] = useState(1);
  const { weatherData } = useWeatherFetch(days);

  const handleDaySelect = (day: number | null): void => {
    console.log(day);
    setDay(day);
  };

  return (
    <>
      <p>{days}</p>
      <Header onDaySelected={handleDaySelect} />
      <Main weatherData={weatherData} />
      <Footer />
    </>
  );
}

export default App;
