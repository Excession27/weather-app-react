import React from "react";
import Home from "container/Home";
import SearchContextProvider from "hoc/SearchContextProvider";

const App = () => {
  return (
    <SearchContextProvider>
      <Home />
    </SearchContextProvider>
  );
};

export default App;
