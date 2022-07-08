import { get5Day3HourData } from "api/data";
import { SearchContext } from "hoc/SearchContextProvider";
import React, { useContext } from "react";
import { useQuery } from "react-query";
import {
  DailyWeatherType,
  dayHLType,
  IContextDataType,
  MainDataType,
} from "types";
import dayjs from "dayjs";
import HourlyList from "./HourlyList";
import DailyCard from "component/DailyCard";

const DailyList = () => {
  const { city, chosenDay } = useContext(SearchContext) as IContextDataType;

  const { data } = useQuery(["daily-data", city], async () => {
    if (city.lat) {
      return (await get5Day3HourData(city)) ?? {};
    }
  });

  const dayhourData: DailyWeatherType[] = data?.data.list;
  const perDayData: Array<DailyWeatherType[]> = [];
  let dailyHighLowData: Array<{
    day: string;
    minTemp: number;
    maxTemp: number;
  }> = [];

  const getDate = (d: DailyWeatherType): number =>
    new Date(d.dt * 1000).getDate();

  dayhourData?.forEach((dataPoint: DailyWeatherType) => {
    const date = getDate(dataPoint);

    const idx = perDayData.findIndex((x: DailyWeatherType[]) => {
      return getDate(x[0]) === date;
    });

    if (idx < 0) {
      perDayData[perDayData.length] = [dataPoint];
    } else {
      perDayData[idx].push(dataPoint);
    }
  });

  dailyHighLowData = perDayData?.map((day: DailyWeatherType[]) => {
    let maxTemp = day[0].main.temp_max;
    let minTemp = day[0].main.temp_min;

    day.forEach(({ main: hour }: { main: MainDataType }) => {
      if (hour.temp > maxTemp) {
        maxTemp = hour.temp_max;
      }
      if (hour.temp < minTemp) {
        minTemp = hour.temp_min;
      }
    });

    return {
      day: day[0].dt_txt.split(" ")[0],
      minTemp,
      maxTemp,
    };
  });
  //TODO: Change date manipulation to use DayJS
  //const now = dayjs();
  //console.log(now.toJSON());

  return (
    <div className="daily flex-col">
      <div className="flex gap-2">
        {dailyHighLowData?.map((dayHLData: dayHLType, index: number) => (
          <DailyCard key={index} dayHLData={dayHLData} />
        ))}
      </div>
      <div className="flex">
        <HourlyList perDayData={perDayData} chosenDay={chosenDay} />
      </div>
    </div>
  );
};

export default DailyList;
