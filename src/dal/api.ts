const API_KEY = import.meta.env.VITE_API_KEY;
// const LOCATION_KEY = "322722"; // Dnipro
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

export type DayItem = {
  Date: string;
  Day: Day;
  EpochDate: number;
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

export type getWeatherData = {
  DailyForecasts: Array<DayItem>;
  Headline: Headline;
};

export type WeatherDisplayData = {
  data: getWeatherData | null;
};

export function getWeatherByDay(days: number, key: number) {
  const url = `https://dataservice.accuweather.com/forecasts/v1/daily/${days}day/${key}?apikey=${API_KEY}&language=uk-ua&metric=true`;

  const promise: Promise<getWeatherData> = fetch(url, options).then(
    (response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    }
  );

  return promise;
}

export function getWeatherByHours(key: number) {
  const url = `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${key}?apikey=${API_KEY}&language=uk-ua&metric=true`;

  const promise = fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  });

  return promise;
}

export function getLocationByGeoposition(lat: number, lon: number) {
  const url = `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?q=${lat},${lon}&apikey=${API_KEY}&language=uk-ua&metric=true`;

  const promise = fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  });

  return promise;
}
