import { Suspense, Fragment } from "react";
import {
  useLoaderData,
  useRouteLoaderData,
  json,
  defer,
  Await,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import LoadingScreen from "../components/UI/LoadingScreen";
import Card from "../components/UI/Card";
import LeftSection from "../components/Home/LeftSection";
import MainSection from "../components/MainSection/MainSection";
import { useSelector } from "react-redux";


function HomePage() {
  const { weather } = useLoaderData();

  return (
    <Suspense fallback={<LoadingScreen />}>
      <div style={{ backgroundColor: "#fdfaeb" }}>
        <Card>
          <Await resolve={weather}>
            {(loadedWeathers) => <LeftSection weatherData={loadedWeathers} />}
          </Await>
          <Await resolve={weather}>
            {(loadedWeathers) => <MainSection weatherData={loadedWeathers} />}
          </Await>
        </Card>
      </div>
    </Suspense>
  );
}

export default HomePage;

async function loadWeather(currentLocation) {

  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=cd5f9d8f1f0b420b886114301231210&q=${currentLocation}&days=7&aqi=no&alerts=no`,
    {
      headers: {
        "X-Authorization": "cd5f9d8f1f0b420b886114301231210",
      },
    }
  );

  if (!response.ok) {
    throw json(
      { message: "Could not fetch weather data." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    console.log(resData);
    return resData;
  }
}

export function loader(currentLocation) {
  return defer({
    weather: loadWeather(currentLocation),
  });
}
