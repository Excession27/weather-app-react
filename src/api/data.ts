import axios from "httpClient/axiosInstance";
import { CoordsDataType } from "types";

const key = process.env.REACT_APP_API_KEY;

const data = process.env.REACT_APP_DATA_URL;

export const getCityWeatherData = (coords: CoordsDataType): any =>
  axios.get(
    data +
      `weather?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${key}`
  );

export const get5Day3HourData = (coords: CoordsDataType): any =>
  axios.get(
    data +
      `forecast?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${key}`
  );
