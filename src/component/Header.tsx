import { getFiveCities } from "api/geo";
import { SearchContext } from "hoc/SearchContextProvider";
import useDebounce from "hooks/useDebounce";
import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ContextDataType } from "types";

const Header = () => {
  const { searchCity, setSearchCity, setCity } = useContext(
    SearchContext
  ) as ContextDataType;
  const [search, setSearch] = useState<string>("");

  const { data: citySearchData, status: searchStatus } = useQuery(
    ["get-city-weather", searchCity],
    async () => {
      if (searchCity.length >= 2) {
        return (await getFiveCities(searchCity)) ?? {};
      }
    }
  );

  const debouncedSearch = useDebounce(search, 200);

  useEffect(() => {
    setSearchCity(debouncedSearch);
  }, [debouncedSearch]);
  const citySearchResults: [] = citySearchData?.data;
  console.log(citySearchResults);

  return (
    <div>
      <div>
        <h1 className="">Are you under the weather?</h1>
      </div>

      {/* <input type="text" onChange={(event) => setCity(event.target.value)} /> */}
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <ul>
        {citySearchResults?.map((city: any, index: number) => (
          <li key={index}>
            <button
              onClick={() => {
                setCity({ lat: city.lat, lon: city.lon });
                setSearch("");
              }}
            >
              {city.name}, {city.country}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
