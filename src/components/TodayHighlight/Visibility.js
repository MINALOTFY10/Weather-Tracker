import classes from "./Visibility.module.css";
import Ball from "../UI/Ball";
import { Fragment } from "react";
import Status from "../UI/Status";

const Visibility = ({ weatherData }) => {
  let currentVisibility = weatherData.forecast.forecastday[0].day["avgvis_km"];

  return (
    <Fragment>
      <div className="d-flex justify-content-between">
        <div className={classes["result-container"]}>
          <span className={`${classes.heading} m-0 p-0`}>
            {currentVisibility}
          </span>
          <span className={`${classes.measure} ms-1`}>Km/h</span>
        </div>
        <Ball value={currentVisibility * 5} Status="green" />
      </div>
      <Status value={currentVisibility} Visibility="true" />
    </Fragment>
  );
};

export default Visibility;
