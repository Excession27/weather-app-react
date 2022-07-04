import React, { useContext } from "react";
import { useQuery } from "react-query";
import { CityWeatherDataType, IContextDataType } from "types";
import { SearchContext } from "hoc/SearchContextProvider";
import { getCityWeatherData } from "api/data";

const CityInfo = () => {
  //const { searchCity } = useContext<ContextDataType>(SearchContext);  // Postaviti pitanje za ovo
  const { city } = useContext(SearchContext) as IContextDataType;

  const { data, status } = useQuery<any>(
    ["get-city-weather", city],
    async () => {
      if (city.lat) {
        return (await getCityWeatherData(city)) ?? {};
      }
    }
  );
  const cityData: CityWeatherDataType = data?.data;
  console.log(cityData);
  // eslint-disable-next-line prefer-const
  let tempUnit = { value: 273.1, unit: "°C" };
  return (
    <div className="CityInfo">
      <h1 className="city-name">
        {cityData && (
          <>
            {cityData?.name}, {cityData?.sys.country}
          </>
        )}
      </h1>
      <div className="temperature-display">
        <img src="" alt="" />
        <p className="value"></p>
        <div className="unit-picker">
          <button>C</button>
          <button>F</button>
        </div>
      </div>
      <p className="weather-desc">{cityData?.weather[0].description}</p>
      <p className="last-update">
        Last update as of{" "}
        {new Date(cityData?.dt * 1000).toLocaleTimeString("en-gb")}
      </p>
      <div className="additional-data">
        <p className="feels">
          Feels like{" "}
          {(cityData?.main.feels_like - tempUnit.value)
            .toFixed(2)
            .concat(tempUnit.unit)}
        </p>
        <div className="wind flex">
          <p>Wind:</p> <i>↗</i> <p>{cityData?.wind.speed} m/s</p>
        </div>
        <p className="visi">Visibility {cityData?.visibility} km</p>
        <p className="pressure">Barometer {cityData?.main.pressure} mb</p>
        <p className="hum">Humidity {cityData?.main.humidity}%</p>
        {/* <p className="dew">
          Dew point {cityData.main.sea_level}
          {tempUnit.unit}
        </p> */}
      </div>
    </div>
  );
};

export default CityInfo;
