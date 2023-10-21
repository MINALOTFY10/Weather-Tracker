import classes from "./WindStatus.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const WindStatus = ({ weatherData }) => {
  return (
    <div className={classes["wind-section"]}>
      <div className={classes["result-container"]}>
        <span className={`${classes.heading} m-0 p-0`}>
          {weatherData.current["wind_mph"]}
        </span>
        <span className={`${classes.measure} ms-1`}>Km/h</span>
      </div>
      <div className="d-flex mt-3">
        <div className={classes["icon-container"]}>
          <FontAwesomeIcon icon={faLocationDot} style={{ color: "#589cff" }} />
        </div>
        <p className="my-auto ms-3 fw-bold">
          {weatherData.location.name}, {weatherData.location.country}
        </p>
      </div>
    </div>
  );
};

export default WindStatus;
