import { Dispatch, SetStateAction } from "react";

export type ContextDataType = {
  city: CoordsDataType;
  setCity: Dispatch<SetStateAction<CoordsDataType>>;
  searchCity: string;
  setSearchCity: Dispatch<SetStateAction<string>>;
};

export type CoordsDataType = {
  lat: string;
  lon: string;
};

export interface ICoordsDataType {
  city: CoordsDataType;
  setCity: Dispatch<SetStateAction<CoordsDataType>>;
}
