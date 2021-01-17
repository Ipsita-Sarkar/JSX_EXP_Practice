import React from "react";
import ReactDOM from "react-dom";
const name = "SHEER ANGEL";
const currentDate = new Date(2021, 1, 1);
const year = currentDate.getFullYear();
ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
