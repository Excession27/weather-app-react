import React from "react";
import { CityWeatherDataType } from "types";
import WindDisplay from "./WindDisplay";

const CityInfo = ({ data }: { data: CityWeatherDataType }) => {
  return (
    <div className="CityInfo flex flex-col content-center">
      <h1 className="city-name text-center">
        {data && (
          <>
            {data?.name}, {data?.sys.country}
          </>
        )}
      </h1>
      <div className="temperature-display flex justify-center align-middle">
        <img
          src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
          alt=""
        />
        <p className="value">{data?.main.temp}°C</p>
      </div>
      <p className="weather-desc">{data?.weather[0].description}</p>
      <p className="last-update">
        Last update as of{" "}
        {new Date(data?.dt * 1000).toLocaleTimeString("en-gb")}
      </p>
      <div className="additional-data">
        <p className="feels">Feels like {data?.main.feels_like}</p>
        <WindDisplay wind={data?.wind} />
        <p className="visi">Visibility {data?.visibility} km</p>
        <p className="pressure">Barometer {data?.main.pressure} mb</p>
        <p className="humi">Humidity {data?.main.humidity}%</p>
      </div>
    </div>
  );
};

export default CityInfo;
