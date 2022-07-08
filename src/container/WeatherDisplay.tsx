import CurrentCard from "component/CurrentCard";
import { getCityWeatherData } from "api/data";
import React, { useContext } from "react";
import { useQuery } from "react-query";
import { SearchContext } from "hoc/SearchContextProvider";
import { CityWeatherDataType, IContextDataType } from "types";

const WeatherDisplay = () => {
  //const { searchCity } = useContext<IContextDataType>(SearchContext);  // Postaviti pitanje za ovo
  const { city } = useContext(SearchContext) as IContextDataType;

  const { data } = useQuery<any>(["get-city-weather", city], async () => {
    if (city.lat) {
      return (await getCityWeatherData(city)) ?? {};
    }
  });
  const cityData: CityWeatherDataType = data?.data;

  return (
    <>
      <CurrentCard data={cityData} />
    </>
  );
};

export default WeatherDisplay;
