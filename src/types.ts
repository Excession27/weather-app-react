import { Dispatch, SetStateAction } from "react";

export interface IContextDataType {
  city: CoordsDataType;
  setCity: Dispatch<SetStateAction<CoordsDataType>>;
  searchCity: string;
  setSearchCity: Dispatch<SetStateAction<string>>;
}

export interface ICoordsDataType {
  city: CoordsDataType;
  setCity: Dispatch<SetStateAction<CoordsDataType>>;
}

export type CoordsDataType = {
  lat: string;
  lon: string;
};

export type CityBaseType = CoordsDataType & {
  name: string;
  country: string;
  state: string;
};

type MainDataType = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
  temp_kf: number;
};

type CityCompleteType = {
  id: number;
  name: string;
  country: string;
  sunrise: EpochTimeStamp;
  sunset: EpochTimeStamp;
  population: number;
  timezone: number;
  coord: CoordsDataType;
};

type SysDataType = {
  type: number;
  id: number;
  country: string;
  sunrise: EpochTimeStamp;
  sunset: EpochTimeStamp;
};

type WindDataType = {
  speed: number;
  deg: number;
  gust?: number;
};

type WeatherInfoType = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type CityWeatherDataType = CoordsDataType & {
  weather: WeatherInfoType[];
  wind: WindDataType;
  clouds: {
    all: number;
  };
  visibility: number;
  pop: number;
  dt: EpochTimeStamp;
  main: MainDataType;
  id: number;
  sys: SysDataType;
  base: string;
  cod: number;
  timezone: number;
  name: string;
};
