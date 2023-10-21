import classes from "./WeekWeather.module.css";
import moment from "moment";
import WeatherItem from "./WeatherITem";
import { useSelector } from "react-redux";
import { durationActions } from "../../store";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { timeIn24Format } from "../../util/auth";

const WeekWeather = ({ weatherData }) => {
  const isToday = useSelector((state) => state.duration.isToday);
  const timeNow = timeIn24Format(weatherData.current["last_updated"]);
  const rowRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const x = e.clientX - startX;
        rowRef.current.scrollLeft = scrollLeft - x;
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startX, scrollLeft]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft(rowRef.current.scrollLeft);
  };

  console.log(timeNow);
  console.log(weatherData.forecast.forecastday[0].hour);

  return (
    <div
      ref={rowRef}
      className={`${classes["weather-row"]} row mt-3 p-0 px-0 mx-0 d-flex justify-content-between`}
      onMouseDown={handleMouseDown}
    >
      {isToday
        ? weatherData.forecast.forecastday[0].hour
            .filter((item) => timeNow < timeIn24Format(item.time))
            .map((item, index) => (
              <WeatherItem
                key={item.date}
                type="today"
                weatherDescription={item}
                index={index}
              />
            ))
        : weatherData.forecast.forecastday.map((item, index) => (
            <WeatherItem
              key={item.date}
              type="week"
              weatherDescription={item}
              index={index}
            />
          ))}
    </div>
  );
};

export default WeekWeather;
