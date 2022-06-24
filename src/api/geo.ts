import axios from "httpClient/axiosInstance";

const APIkey = process.env.REACT_APP_API_KEY;
const geo = process.env.REACT_APP_GEO_URL;

export const getFiveCities = (city: string): any =>
  axios.get(geo + `direct?q=${city}&limit=5&appid=${APIkey}`);

export const getXCities = (name: string, limit: number): any =>
  axios.get(geo + `direct?q=${name}&limit=${limit}&appid=${APIkey}`);
