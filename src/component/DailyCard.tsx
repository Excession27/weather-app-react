import dayjs from "dayjs";
import { SearchContext } from "hoc/SearchContextProvider";
import React, { useContext } from "react";
import { dayHLType, IContextDataType } from "types";

const DailyCard = ({ dayHLData }: { dayHLData: dayHLType }) => {
  const { setChosenDay } = useContext(SearchContext) as IContextDataType;
  return (
    <div
      className=" rounded-lg border p-3 focus-within:border-green-700 hover:cursor-pointer hover:bg-slate-200"
      onClick={() => {
        setChosenDay(dayjs(dayHLData.day).date());
      }}
    >
      <p>{dayHLData.day}</p>
      <p>High: {dayHLData.maxTemp}C</p>
      <p>Low: {dayHLData.minTemp}C</p>
    </div>
  );
};

export default DailyCard;
