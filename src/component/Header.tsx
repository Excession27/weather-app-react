import { getFiveCities } from "api/geo";
import { SearchContext } from "hoc/SearchContextProvider";
import useDebounce from "hooks/useDebounce";
import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { IContextDataType, CityBaseType } from "types";

const Header = () => {
  const { searchCity, setSearchCity, setCity } = useContext(
    SearchContext
  ) as IContextDataType;
  const [search, setSearch] = useState<string>("");

  const { data: citySearchData } = useQuery(
    ["get-city-weather", searchCity],
    async () => {
      if (searchCity.length >= 2) {
        return (await getFiveCities(searchCity)) ?? {};
      }
    }
  );

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    setSearchCity(debouncedSearch);
  }, [debouncedSearch]);
  const citySearchResults: [] = citySearchData?.data;

  return (
    <div className="header text-center">
      <div>
        <h1 className="">Are you under the weather?</h1>
      </div>

      {/* Search for a city */}
      <input
        className=" w-48 rounded bg-slate-400 p-2"
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {/* Display results and when clicked on one, clear search and set city parametars */}
      {/* TODO: Make a dropdown menu to display search results */}
      <ul className="">
        {citySearchResults?.map((city: CityBaseType, index: number) => (
          <li key={index}>
            <button
              className="mb-1 rounded bg-emerald-700 py-1 px-1 text-center"
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
