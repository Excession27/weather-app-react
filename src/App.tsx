import React from "react";
import Home from "container/Home";
import SearchContextProvider from "hoc/SearchContextProvider";
import ReactQueryProvider from "hoc/ReactQueryProvider";
import "./App.css";

const App = () => {
  return (
    <ReactQueryProvider>
      <SearchContextProvider>
        <Home />
      </SearchContextProvider>
    </ReactQueryProvider>
  );
};

export default App;
