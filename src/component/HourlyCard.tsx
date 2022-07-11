import useWindDir from "hooks/useWindDir";
import React, { FC } from "react";
import { HourlyDataType } from "types";
import WindDisplay from "./WindDisplay";

const HourlyCard: FC<HourlyDataType> = ({
  time,
  img,
  temperature,
  desc,
  wind,
}: HourlyDataType) => {
  return (
    <div className="rounded-lg border border-cyan-800 border-opacity-60 pl-3">
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
      <p className="temp">{temperature}C</p>
      <p className="desc">{desc}</p>
      <WindDisplay wind={wind} />
      <p>{time}</p>
    </div>
  );
};

export default HourlyCard;
