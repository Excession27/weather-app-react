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

  const { data: citySearchData, status: searchStatus } = useQuery(
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
  console.log(citySearchResults);

  return (
    <div className="header">
      <div>
        <h1 className="">Are you under the weather?</h1>
      </div>

      {/* Search for a city */}
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {/* Display results and when clicked on one, clear search and set city parametars */}
      <ul>
        {citySearchResults?.map((city: CityBaseType, index: number) => (
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
