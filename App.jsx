import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

const App = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
