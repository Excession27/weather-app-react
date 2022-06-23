import React from "react";
import Home from "container/Home";
import SearchContextProvider from "hoc/SearchContextProvider";

const a = 22;
const b: number = 21;
let unused: boolean = a == b;
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
