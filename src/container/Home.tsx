import CityInfo from "component/CityInfo";
import Header from "component/Header";
import DailyList from "container/DailyList";
//import HourlyList from "container/HourlyList";
import React from "react";

const Home = () => {
  return (
    <div>
      <Header />
      <CityInfo />
      <DailyList />
      {/* <HourlyList /> */}
    </div>
  );
};

export default Home;
