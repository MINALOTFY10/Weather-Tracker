import classes from "./WeatherIcon.module.css";
import moment from "moment";
import { ConvertAmPmFormatTo24Format } from "../../util/auth";
import { findIcon } from "../../util/auth";

const WeatherIcon = ({ desription, smallIcon }) => {
  const timeNow = moment().format("h:mm");
  const dayOrNight = moment().format("a");

  const iconSrc = findIcon(desription, dayOrNight, timeNow);

  return smallIcon == "true" ? (
    <img src={iconSrc} className="img-fluid" width={50} />
  ) : (
    <img src={iconSrc} className="img-fluid col-8 mb-3" />
  );
};

export default WeatherIcon;
