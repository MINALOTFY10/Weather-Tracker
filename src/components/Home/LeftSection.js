import classes from "./LeftSection.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import SearchBar from "../SearchBar/SearchBar"
import { timeIn24Format } from "../../util/auth";
import moment from "moment";
import WeatherImg from "../../assets/Weather_Icon.png";
import RainDropsImg from "../../assets/RainDrops.png";
import CityImg from "../../assets/City.png";
import { useSelector } from "react-redux";
import { SearchResultsList } from "../SearchBar/SearchResultsList";
import { useState } from "react";

const LeftSection = ({ weatherData }) => {
  const isCelsius = useSelector((state) => state.scale.isCelsius);

  // const timeNow = moment().format("h:mm");
  // const amOrPm = moment().format("a");
  let time = timeIn24Format(weatherData.current["last_updated"]);
  const today = moment().format("dddd");
  const [results, setResults] = useState([]);

  return (
    <div className={classes.bar}>
      <div className={classes["search-bar-container"]}>
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && (
          <SearchResultsList results={results} />
        )}
      </div>
      <div className="d-flex justify-content-center mt-5 pb-1">
        <WeatherIcon desription={weatherData.current.condition.text} />
      </div>
      <div className={`${classes.temperture} d-flex mt-3`}>
        {isCelsius ? (
          <>
            <h1>{weatherData.current.temp_c}</h1>
            <h3>°C</h3>{" "}
          </>
        ) : (
          <>
            <h1>{weatherData.current.temp_f}</h1>
            <h3>°F</h3>{" "}
          </>
        )}
      </div>
      <div className={`${classes.day} mt-2 d-flex pb-4`}>
        <h5>{today}</h5>
        <h6 className="ms-2">{time}</h6>
      </div>
      <div className={`mt-3 d-flex ${classes.status}`}>
        <img src={WeatherImg} className="me-3"  onDragStart={(e) => e.preventDefault()} />
        <p>{weatherData.current.condition.text}</p>
      </div>
      <div className={`mt-0 d-flex ${classes.status}`}>
        <img src={RainDropsImg} className="me-3" />
        <p>
          Rain - {weatherData.forecast.forecastday[0].day["daily_will_it_rain"]}
          %
        </p>
      </div>
      <div className={`${classes["city-container"]} mt-5`}>
        <img
          src={CityImg}
          className={`${classes["city-img"]} mt-2 rounded-3 img-fluid`}
          alt="City"
        />
        <div className={`${classes["overlayed-text"]}`}>
          {weatherData.location.name}, {weatherData.location.country}
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
