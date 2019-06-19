import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import SideBar from "./sidebar";

function App() {
  return (
    <div id="App">
      <SideBar />

      <div id="page-wrap">
          <h1>Hello</h1>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);