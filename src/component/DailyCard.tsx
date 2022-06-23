import React from "react";

const DailyCard = ({
  date,
  img,
  temperature,
  desc,
}: {
  date: string;
  img: string;
  temperature: { high: number; low: number };
  desc: string;
}) => {
  return (
    <div>
      <p className="date">{date}</p>
      <img src={img} alt="" />
      <div>
        <p>{temperature.high}°</p>
        <p>{temperature.low}°</p>
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default DailyCard;
