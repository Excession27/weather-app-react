import React, { FC } from "react";
import { CityWeatherDataType, HourlyDataType } from "types";
import TempDisplay from "./TempDisplay";
import WindDisplay from "./WindDisplay";

const HourlyCard = ({ data }: { data: CityWeatherDataType }) => {
  return (
    <div className="rounded-lg border border-cyan-800 border-opacity-60 p-2 pl-3">
      <TempDisplay data={data} imgSize={"2x"} />
      <WindDisplay wind={data?.wind} />
      <p className="mt-2">{data?.dt_txt.slice(-8).slice(0, 5)}</p>
    </div>
  );
};

export default HourlyCard;
