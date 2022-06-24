import React, { createContext, useState } from "react";
import { ContextDataType, CoordsDataType, ICoordsDataType } from "types";

export const SearchContext = createContext<ContextDataType | null>(null);
// export const SearchContext = createContext<any>(null);

const SearchContextProvider = ({ children }: any) => {
  const [city, setCity] = useState<any>({});
  const [searchCity, setSearchCity] = useState<string>("");

  return (
    <SearchContext.Provider
      value={{ city, setCity, searchCity, setSearchCity }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
