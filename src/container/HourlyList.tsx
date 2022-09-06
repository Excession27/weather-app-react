import HourlyCard from "component/HourlyCard";
import dayjs from "dayjs";
import React from "react";
import { DailyWeatherType } from "types";

type Props = {
  perDayData: Array<DailyWeatherType[]>;
  chosenDay: number;
};

const HourlyList = ({ perDayData, chosenDay }: Props) => {
  return (
    <div className="flex flex-wrap justify-around gap-3 pt-3">
      {perDayData
        ?.filter(
          (day: DailyWeatherType[]) =>
            dayjs(day[0].dt_txt.split(" ")[0]).date() === chosenDay
        )[0]
        ?.map((day: any, index: number) => (
          <HourlyCard key={index} data={day} />
        ))}
    </div>
  );
};

export default HourlyList;
