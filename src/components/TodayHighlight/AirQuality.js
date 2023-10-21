import classes from "./Humidity.module.css";
import Ball from "../UI/Ball";
import { Fragment } from "react";
import Status from "../UI/Status";


const AirQuality = ({ weatherData }) => {
  const currentAirQuality = weatherData.current["pressure_in"];

  return (
    <Fragment>
      <div className="d-flex justify-content-between">
        <div className={classes["result-container"]}>
          <span className={`${classes.heading} m-0 p-0`}>
            {currentAirQuality}
          </span>
        </div>
        <Ball value={Math.floor(currentAirQuality)} />
      </div>
      <Status value={Math.floor(currentAirQuality)} />
    </Fragment>
  );
};

export default AirQuality;
