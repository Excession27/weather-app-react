import { Dispatch, SetStateAction } from "react";

type RainType = {
  "3h"?: number;
};

type DateTimeType = {
  dt: EpochTimeStamp;
  dt_txt: string;
};

type CloudsType = {
  all: number;
};

type PopType = {
  pop: number;
};
type VisibilityType = {
  visibility?: number;
};

export type MainDataType = {
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

export type dayHLType = { day: string; maxTemp: number; minTemp: number };

export type HourlyDataType = {
  time: string;
  img: string;
  temperature: number;
  desc: string;
  windSpeed: number;
  windDir: number;
};

export interface ICoordsDataType {
  city: CoordsDataType;
  setCity: Dispatch<SetStateAction<CoordsDataType>>;
}

export type CoordsDataType = {
  lat: string;
  lon: string;
};

export interface IContextDataType {
  city: CoordsDataType;
  setCity: Dispatch<SetStateAction<CoordsDataType>>;
  searchCity: string;
  setSearchCity: Dispatch<SetStateAction<string>>;
  chosenDay: number;
  setChosenDay: Dispatch<SetStateAction<number>>;
}

export type TempUnitType = {
  value: number;
  unit: string;
};

export type CityWeatherDataType = VisibilityType &
  CoordsDataType &
  DateTimeType &
  PopType & {
    weather: WeatherInfoType[];
    wind: WindDataType;
    clouds: {
      all: number;
    };
    main: MainDataType;
    id: number;
    sys: SysDataType;
    base: string;
    cod: number;
    timezone: number;
    name: string;
  };

export type DailyWeatherType = VisibilityType &
  RainType &
  DateTimeType &
  CloudsType &
  PopType & {
    wind: WindDataType;
    main: MainDataType;
    weather: WeatherInfoType[];
    sys: SysDataType;
  };

export type CityBaseType = CoordsDataType & {
  name: string;
  country: string;
  state: string;
};
