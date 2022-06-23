import React, { createContext, useState } from "react";
import { ContextDataType } from "types";

export const SearchContext = createContext<ContextDataType>({ search: "" });

const SearchContextProvider = ({ children }: any) => {
  const [search, setSearch] = useState<string>("");
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
