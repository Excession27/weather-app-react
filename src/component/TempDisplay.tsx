import React from "react";
import { CityWeatherDataType, DailyWeatherType } from "types";

type TempProps = {
  data: CityWeatherDataType | DailyWeatherType;
  imgSize: string;
  className?: string;
};

const TempDisplay = ({ data, imgSize, className = "" }: TempProps) => {
  // TODO: Component for displaying temperature, cloud cover and icon
  return (
    <div
      className={`temperature-display flex flex-col justify-center align-middle ${className}`}
    >
      <img
        src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}@${imgSize}.png`}
        alt=""
      />
      <p className="value">{data?.main.temp.toFixed(1)}°C</p>
      <p className="weather-desc">{data?.weather[0].description}</p>
    </div>
  );
};

export default TempDisplay;
