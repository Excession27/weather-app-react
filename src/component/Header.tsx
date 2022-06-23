// import { SearchContext } from "hoc/SearchContextProvider";
// import React, { useContext } from "react";
// import { ContextDataType } from "types";

const Header = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //const { search, setSearch } = useContext<ContextDataType>(SearchContext);

  return (
    <div>
      <div>
        <h1 className="">Are you under the weather?</h1>
      </div>

      <input type="text" />
    </div>
  );
};

export default Header;
