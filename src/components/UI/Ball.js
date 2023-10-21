import React, { useState } from "react";
import "./Ball.css";

const Ball = ({ value, Status }) => {
  if (value <= 34) {
    value = 34;
  }

  return (
    <div
      className={Status == "green" ? "container green-container" : "container"}
    >
      <div
        className={Status == "green" ? "ball green" : "ball"}
        style={{ top: `${value}%` }}
      ></div>
    </div>
  );
};

export default Ball;
