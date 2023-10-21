import classes from "./Humidity.module.css";
import Ball from "../UI/Ball";
import { Fragment } from "react";
import Status from "../UI/Status";


const Humidity = ({ weatherData }) => {
  const currentHumidity = weatherData.current.humidity;

  return (
    <Fragment>
      <div className="d-flex justify-content-between">
        <div className={classes["result-container"]}>
          <span className={`${classes.heading} m-0 p-0`}>
            {currentHumidity}
          </span>
          <span className={`${classes.measure} ms-1`}>%</span>
        </div>
        <Ball value={currentHumidity} />
      </div>
      <Status value={currentHumidity} />
    </Fragment>
  );
};

export default Humidity;
