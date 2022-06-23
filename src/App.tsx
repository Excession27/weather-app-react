import React from "react";
import Home from "container/Home";
import SearchContextProvider from "hoc/SearchContextProvider";

const a: number = 1;
const b: number = 2;
const unused = a == b;
function A() {
  if (unused) {
    console.log("it's true");
  }
}
A();
function App() {
  return (
    <SearchContextProvider>
      <Home />
    </SearchContextProvider>
  );
}

export default App;
