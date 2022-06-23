import React from "react";
//import { useQuery } from "react-query";

const CityInfo = () => {
  // const cityData = useQuery(["find-city", searchCity], async () => {});
  return (
    <div>
      <h1 className="city-name">City name</h1>
      <div className="temperature-display">
        <img src="" alt="" />
        <p className="value"></p>
        <div className="unit-picker">
          <button>C</button>
          <button>F</button>
        </div>
      </div>
      <p className="weather-desc">Sunny</p>
      <p className="last-update">Last update as of 13:30</p>
      <div className="additional-data">
        <p className="feels">Feels like 13</p>
        <div className="wind">
          <p>Wind</p> <i>↗</i> <p>3km/h</p>
        </div>
        <p className="visi">Visibility 13 km</p>
        <p className="pressure">Barometer 1022 mb</p>
        <p className="hum">Humidity 62%</p>
        <p className="dew">Dew point 4°</p>
      </div>
    </div>
  );
};

export default CityInfo;
