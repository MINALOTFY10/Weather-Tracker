import classes from "./TodayHighlight.module.css";
import UVIndexIndicator from "./UVIndexIndicator";
import HighlighCard from "./HighlighCard";
import WindStatus from "./WindStatus";
import SunTimes from "./SunTimes";
import Humidity from "./Humidity";
import Visibility from "./Visibility";
import AirQuality from "./AirQuality";

const TodayHighlight = ({ weatherData }) => {
  return (
    <div className={`mt-4`}>
      <h5 className="fw-bold">Today Highlight</h5>
      <div className="row">
        <div className="col-4">
          <HighlighCard title="UV index">
            <UVIndexIndicator uvIndex={weatherData.current.uv} />
          </HighlighCard>
        </div>
        <div className="col-4">
          <HighlighCard title="Wind Status">
            <WindStatus weatherData={weatherData} />
          </HighlighCard>
        </div>
        <div className="col-4">
          <HighlighCard title="UV index">
            <SunTimes weatherData={weatherData} />
          </HighlighCard>
        </div>
        <div className="col-4">
          <HighlighCard title="Humidity">
            <Humidity weatherData={weatherData} />
          </HighlighCard>
        </div>
        <div className="col-4">
          <HighlighCard title="Visibility">
            <Visibility weatherData={weatherData} />
          </HighlighCard>
        </div>
        <div className="col-4">
          <HighlighCard title="Air Quality">
            <AirQuality weatherData={weatherData} />
          </HighlighCard>
        </div>
      </div>
    </div>
  );
};

export default TodayHighlight;
