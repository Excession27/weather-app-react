import dayjs from "dayjs";
import React, { createContext, useState } from "react";
import { IContextDataType, CoordsDataType, ICoordsDataType } from "types";

export const SearchContext = createContext<IContextDataType | null>(null);
// export const SearchContext = createContext<any>(null);

const SearchContextProvider = ({ children }: any) => {
  const [city, setCity] = useState<any>({});
  const [searchCity, setSearchCity] = useState<string>("");
  const [chosenDay, setChosenDay] = useState<number>(dayjs().date());

  return (
    <SearchContext.Provider
      value={{
        city,
        setCity,
        searchCity,
        setSearchCity,
        chosenDay,
        setChosenDay,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
