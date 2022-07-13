import React from "react";
import { CityWeatherDataType } from "types";
import TempDisplay from "./TempDisplay";
import WindDisplay from "./WindDisplay";

const CityInfo = ({ data }: { data: CityWeatherDataType }) => {
  return (
    <div className="CityInfo flex flex-col content-center items-center">
      <h1 className="city-name">
        {data && (
          <>
            {data?.name}, {data?.sys.country}
          </>
        )}
      </h1>
      <TempDisplay
        className="w-[300px] items-center"
        data={data}
        imgSize={"4x"}
      />

      <p className="last-update p-2">
        Last update as of{" "}
        {new Date(data?.dt * 1000).toLocaleTimeString("en-gb")}
      </p>
      <div className="additional-data flex w-1/4 flex-wrap justify-around p-4">
        <p className="feels">Feels like: {data?.main.feels_like}</p>
        <WindDisplay wind={data?.wind} />
        <p className="visi">Visibility: {data?.visibility} km</p>
        <p className="pressure">Barometer: {data?.main.pressure} mb</p>
        <p className="humi">Humidity: {data?.main.humidity}%</p>
      </div>
    </div>
  );
};

export default CityInfo;
