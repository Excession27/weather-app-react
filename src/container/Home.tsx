import Header from "component/Header";
import DailyList from "container/DailyList";
//import HourlyList from "container/HourlyList";
import React from "react";
import WeatherDisplay from "./WeatherDisplay";

const Home = () => {
  return (
    <div>
      <Header />
      <WeatherDisplay />
      <DailyList />
      {/* <HourlyList /> */}
    </div>
  );
};

export default Home;
