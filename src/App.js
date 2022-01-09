import React from "react";

import DateInputExample from "./examples/DateInputExample";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";

import pkg from "../package.json";

const App = () => {
  return (
    <div className="p-5">
      <h1>PlayDate v{pkg.version}</h1>
      <p>A simple datetime components library!</p>

      <DateInputExample />
    </div>
  );
};

export default App;
