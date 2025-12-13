const API_KEY = import.meta.env.VITE_API_KEY;
const LOCATION_KEY = "322722"; // Dnipro

const url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${LOCATION_KEY}?apikey=${API_KEY}`;

const options = {
  method: "GET",
};

type Day = {
  HasPrecipitation: boolean;
  Icon: number;
  IconPhrase: string;
};
type Night = {
  IconPhrase: string;
  PrecipitationIntensity: string;
  PrecipitationType: string;
};

type DayTemperature = {
  Minimum: { Value: number; Unit: string; UnitType: number };
  Maximum: { Value: number; Unit: string; UnitType: number };
};

type DayItem = {
  Date: string;
  Day: Day;
  Night: Night;
  Temperature: DayTemperature;
};

type Headline = {
  Category: string;
  EffectiveDate: string;
  EffectiveEpochDate: number;
  EndDate: string;
  EndEpochDate: number;
  Link: string;
  MobileLink: string;
  Severity: number;
  Text: string;
};

export type getWeather = {
  DailyForecasts: Array<DayItem>;
  Headline: Headline;
};

export function getWeather() {
  const promise: Promise<getWeather> = fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  });

  return promise;
}
