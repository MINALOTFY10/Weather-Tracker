import classes from "./SunTimes.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const SunTimes = ({ weatherData }) => {
  return (
    <>
      <div className={`${classes.sunrise} d-flex mt-4`}>
        <div className={classes["arrow-container"]}>
          <FontAwesomeIcon icon={faArrowUp} width={10} />
        </div>
        <div className="d-flex flex-column justify-content-between">
          <p className={classes.time}>
            {weatherData.forecast.forecastday[0].astro.sunrise}
          </p>
          <p className={classes.calc}>- 2m 38s</p>
        </div>
      </div>

      <div className={`${classes.sunrise} d-flex mt-3`}>
        <div className={classes["arrow-container"]}>
          <FontAwesomeIcon icon={faArrowDown} width={10} />
        </div>
        <div className="d-flex flex-column justify-content-between">
          <p className={classes.time}>
            {weatherData.forecast.forecastday[0].astro.sunset}
          </p>
          <p className={classes.calc}>- 3m 26s</p>
        </div>
      </div>
    </>
  );
};

export default SunTimes;
