// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [tesla, honda] = cars;
console.log(tesla);
console.log(honda);

const [teslaTopColour, teslaLowColour] = tesla.coloursByPopularity;
const [hondaTopColour, hondaLowColour] = honda.coloursByPopularity;
console.log(teslaTopColour);
console.log(hondaTopColour);

const teslaTopSpeed = tesla.speedStats.topSpeed;
const hondaTopSpeed = honda.speedStats.topSpeed;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
