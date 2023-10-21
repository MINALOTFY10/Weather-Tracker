import classes from "./weatherITem.module.css";
import moment from "moment";
import { useSelector } from "react-redux";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import { timeIn24Format } from "../../util/auth";

const WeatherITem = ({ weatherDescription, index, type }) => {
  let timeNow = "";

  if (type == "today") {
    timeNow = timeIn24Format(weatherDescription.time);
  }
  const isCelsius = useSelector((state) => state.scale.isCelsius);
  const today = moment().add(index, "days").format("dddd").substring(0, 3);

  return (
    <div className={classes.card}>
      <div className={`${classes.day} mb-4 fw-bold`}>
        {type == "today" ? timeNow : today}
      </div>
      <div className={classes.icon}>
        {
          <WeatherIcon
            desription={
              type == "today"
                ? weatherDescription.condition.text
                : weatherDescription.day.condition.text
            }
            smallIcon="true"
          />
        }
      </div>
      <div className={`${classes.temp} d-flex justify-content-around mt-2`}>
        <div className={`${classes["max-temp"]} d-flex p-0 m-0`}>
          {isCelsius
            ? parseInt(
                type == "today"
                  ? weatherDescription["temp_c"]
                  : weatherDescription.day["maxtemp_c"]
              )
            : parseInt(
                type == "today"
                  ? weatherDescription["temp_f"]
                  : weatherDescription.day["maxtemp_f"]
              )}
          {type == "week" ? (
            "°"
          ) : (
            <p className="p-0 m-0">{isCelsius ? "°C" : "°F"}</p>
          )}
        </div>
        <div
          className={
            type == "week" ? classes["min-temp"] : classes["hide-min-temp"]
          }
        >
          {isCelsius
            ? type == "week"
              ? parseInt(weatherDescription.day["mintemp_c"])
              : ""
            : type == "week"
            ? parseInt(weatherDescription.day["mintemp_f"])
            : ""}
          {type == "week" ? "°" : ""}
        </div>
      </div>
    </div>
  );
};

export default WeatherITem;
