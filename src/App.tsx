import React from "react";
import Home from "container/Home";
import SearchContextProvider from "hoc/SearchContextProvider";
import ReactQueryProvider from "hoc/ReactQueryProvider";
import "./App.css";

if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  import("vivid-studio" as any).then((v) => v.run());
  import("vivid-studio/style" as any);
}
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
