import axios from "@httpClient/axiosInstance";

const APIkey = process.env.API_KEY;

export const getFiveCities = (name: string): any =>
  axios.get(process.env.GEO_URL + `direct?q=${name}&limit=5&appid=${APIkey}`);

export const getXCities = (name: string, limit: number): any =>
  axios.get(
    process.env.GEO_URL + `direct?q=${name}&limit=${limit}&appid=${APIkey}`
  );
