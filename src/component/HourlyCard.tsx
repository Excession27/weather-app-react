import React, { FC } from "react";

type HourlyDataType = {
  time: string;
  img: string;
  temperature: number;
  desc: string;
  prec: string;
  windSpeed: string;
  windDir: string;
};

const HourlyCard: FC<HourlyDataType> = ({
  time,
  img,
  temperature,
  desc,
  prec,
  windSpeed,
  windDir,
}: HourlyDataType) => {
  return (
    <div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
      <p className="temp">{temperature}</p>
      <p className="desc">{desc}</p>
      <p className="prec">{prec}</p>
      <p className="prec">{prec}</p>
      <div className="wind">
        <span>{windDir}</span>
        <span>{windSpeed}</span>
      </div>
    </div>
  );
};

export default HourlyCard;
