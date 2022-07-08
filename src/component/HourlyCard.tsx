import useWindDir from "hooks/useWindDir";
import React, { FC } from "react";
import { HourlyDataType } from "types";

const HourlyCard: FC<HourlyDataType> = ({
  time,
  img,
  temperature,
  desc,
  windSpeed,
  windDir,
}: HourlyDataType) => {
  return (
    <div className="rounded-lg border border-cyan-800 border-opacity-60 pl-3">
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
      <p className="temp">{temperature}C</p>
      <p className="desc">{desc}</p>
      <div className="wind">
        <span className="dir p-1">{useWindDir(windDir)}</span>
        <span className="speed p-1">{windSpeed}m/s</span>
      </div>
      <p>{time}</p>
    </div>
  );
};

export default HourlyCard;
