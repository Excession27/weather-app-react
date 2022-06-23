import React from "react";
import Home from "container/Home";
import SearchContextProvider from "hoc/SearchContextProvider";

function App() {
  return (
    <SearchContextProvider>
      <Home />
    </SearchContextProvider>
  );
}

export default App;
