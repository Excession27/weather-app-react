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
    <div className="flex gap-3 p-3">
      {perDayData
        ?.filter(
          (day: DailyWeatherType[]) =>
            dayjs(day[0].dt_txt.split(" ")[0]).date() === chosenDay
        )[0]
        ?.map((day: DailyWeatherType, index: number) => (
          <HourlyCard
            key={index}
            time={day.dt_txt.split(" ")[1].slice(0, 5)}
            img={day.weather[0].icon}
            temperature={day.main.temp}
            desc={day.weather[0].description}
            windSpeed={day.wind.speed}
            windDir={day.wind.deg}
          />
        ))}
    </div>
  );
};

export default HourlyList;
