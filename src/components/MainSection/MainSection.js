import classes from "./MainSection.module.css";
import Header from "./Header";
import WeekWeather from "./WeekWeather";
import TodayHighlight from "../TodayHighlight/TodayHighlight";

const MainSection = ({ weatherData }) => {
  return <div className={`p-4 ${classes.section}`}>
    <Header weatherData={weatherData}/>
    <WeekWeather weatherData={weatherData}/>
    <TodayHighlight weatherData={weatherData}/>
  </div>;
};

export default MainSection;
