import classes from "./Header.module.css";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { scaleActions, durationActions } from "../../store";

const Header = ({ weatherData }) => {
  const isCelsius = useSelector((state) => state.scale.isCelsius);
  const isFahrenheit = useSelector((state) => state.scale.isFahrenheit);
  const isToday = useSelector((state) => state.duration.isToday);
  const isWeek = useSelector((state) => state.duration.isWeek);

  const dispatch = useDispatch();

  const onClickScaleHandler = (type) => {
    if (type == "Celsius") {
      dispatch(scaleActions.toggleCelsiusScale());
    } else {
      dispatch(scaleActions.toggleFahrenheitScale());
    }
  };

  const onClickDurationHandler = (type) => {
    if (type == "Today") {
      dispatch(durationActions.toggleTodayDuration());
    } else {
      dispatch(durationActions.toggleWeekDuration());
    }
  };

  return (
    <div className="d-flex justify-content-between">
      <div className={`d-flex`}>
        <p
          onClick={() => onClickDurationHandler("Today")}
          className={
            isToday
              ? `${classes["duration-active"]} me-3 ${classes.button}`
              : `me-3 ${classes.button}`
          }
        >
          <p className="p-0 m-0">Today</p>
        </p>
        <p
          onClick={() => onClickDurationHandler("Week")}
          className={
            isWeek
              ? `${classes["duration-active"]} ${classes.button}`
              : `${classes.button}`
          }
        >
          <p className="p-0 m-0">Week</p>
        </p>
      </div>

      <div className={`d-flex`}>
        <button
          onClick={() => onClickScaleHandler("Celsius")}
          className={isCelsius ? `${classes.Active} me-3` : "me-3"}
        >
          <p className="p-0 m-0">°C</p>
        </button>
        <button
          onClick={() => onClickScaleHandler("Fahrenheit")}
          className={isFahrenheit ? `${classes.Active}` : ""}
        >
          <p className="p-0 m-0">°F</p>
        </button>
      </div>
    </div>
  );
};

export default Header;
