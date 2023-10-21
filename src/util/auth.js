import sunnyImg from "../assets/Sunny.png";
import clearImg from "../assets/Clear.png";
import PatchyRainPossibleAMImg from "../assets/Patchy rain possible-am.png";
import PatchyRainPossiblePMImg from "../assets/Patchy rain possible-pm.png";
import PartlyCloudyDayImg from "../assets/Partly cloudy day.png";
import PartlyCloudyNightImg from "../assets/Partly cloudy night.png";
import CloudyDayImg from "../assets/Cloudy day.png";
import CloudyNightImg from "../assets/Cloudy night.png";
import ModerateRainAtTimesAMImg from "../assets/Moderate rain at times-am.png";
import ModerateRainAtTimesPMImg from "../assets/Moderate rain at times-pm.png";
import HeavyRainAtTimesAMImg from "../assets/Heavy rain at times-am.png";
import HeavyRainAtTimesPMImg from "../assets/Heavy rain at times-pm.png";
import ModerateSnowAMImg from "../assets/Moderate snow-am.png";
import ModerateSnowPMImg from "../assets/Moderate snow-pm.png";
import LightFreezingRainAMImg from "../assets/Light freezing rain-am.png";
import LightFreezingRainPMImg from "../assets/Light freezing rain-pm.png";
import MistAMImg from "../assets/Mist-am.png";
import MistPMImg from "../assets/Mist-pm.png";
import PatchySleetNearbyAMImg from "../assets/Patchy sleet nearby-am.png";
import PatchySleetNearbyPMImg from "../assets/Patchy sleet nearby-pm.png";
import ThunderyOutbreaksAMImg from "../assets/Thundery outbreaks-am.png";
import ThunderyOutbreaksPMImg from "../assets/Thundery outbreaks-pm.png";
import FogyDayImg from "../assets/Fogy day.png";
import FogyNightImg from "../assets/Fogy night.png";
import LightSnowAMImg from "../assets/Light snow-am.png";
import LightSnowPMImg from "../assets/Light snow-pm.png";
import SnowAMImg from "../assets/Snow-am.png";
import SnowPMImg from "../assets/Snow-pm.png";
import ThunderRainAMImg from "../assets/ThunderWithRain-am.png";
import ThunderRainPMImg from "../assets/ThunderWithRain-pm.png";
import ThunderLightRainAMImg from "../assets/ThunderWithLightRain-am.png";
import ThunderLightRainPMImg from "../assets/ThunderWithLightRain-pm.png";

const iconMapping = {
  Sunny: sunnyImg,
  Clear: clearImg,
  "Partly cloudy-am": PartlyCloudyDayImg,
  "Partly cloudy-pm": PartlyCloudyNightImg,
  "Cloudy-am": CloudyDayImg,
  "Cloudy-pm": CloudyNightImg,
  "Overcast-am": CloudyDayImg,
  "Overcast-pm": CloudyNightImg,
  "Patchy rain possible-am": PatchyRainPossibleAMImg,
  "Patchy rain possible-pm": PatchyRainPossiblePMImg,
  "Patchy rain nearby-am": PatchyRainPossibleAMImg,
  "Patchy rain nearby-pm": PatchyRainPossiblePMImg,
  "Patchy light rain-am": PatchyRainPossibleAMImg,
  "Patchy light rain-pm": PatchyRainPossiblePMImg,
  "Light rain-am": PatchyRainPossibleAMImg,
  "Light rain-pm": PatchyRainPossiblePMImg,
  "Light rain shower-am": PatchyRainPossibleAMImg,
  "Light rain shower-pm": PatchyRainPossiblePMImg,
  "Light sleet showers-am": PatchyRainPossibleAMImg,
  "Light sleet showers-pm": PatchyRainPossiblePMImg,
  "Moderate rain at times-am": ModerateRainAtTimesAMImg,
  "Moderate rain at times-pm": ModerateRainAtTimesPMImg,
  "Moderate rain-am": ModerateRainAtTimesAMImg,
  "Moderate rain-pm": ModerateRainAtTimesPMImg,
  "Moderate or heavy sleet showers-am": ModerateRainAtTimesAMImg,
  "Moderate or heavy sleet showers-pm": ModerateRainAtTimesPMImg,
  "Heavy rain at times-am": HeavyRainAtTimesAMImg,
  "Heavy rain at times-pm": HeavyRainAtTimesPMImg,
  "Heavy rain-am": HeavyRainAtTimesAMImg,
  "Heavy rain-pm": HeavyRainAtTimesPMImg,
  "Moderate or heavy rain shower-am": HeavyRainAtTimesAMImg,
  "Moderate or heavy rain shower-pm": HeavyRainAtTimesPMImg,
  "Torrential rain shower-am": HeavyRainAtTimesAMImg,
  "Torrential rain shower-pm": HeavyRainAtTimesPMImg,
  "Moderate snow-am": ModerateSnowAMImg,
  "Moderate snow-pm": ModerateSnowPMImg,
  "Patchy snow nearby-am": ModerateSnowAMImg,
  "Patchy snow nearby-pm": ModerateSnowPMImg,
  "Light sleet-am": ModerateSnowAMImg,
  "Light sleet-pm": ModerateSnowPMImg,
  "Moderate or heavy sleet-am": ModerateSnowAMImg,
  "Moderate or heavy sleet-pm": ModerateSnowPMImg,
  "Light freezing rain-am": LightFreezingRainAMImg,
  "Light freezing rain-pm": LightFreezingRainPMImg,
  "Patchy freezing drizzle nearby-am": LightFreezingRainAMImg,
  "Patchy freezing drizzle nearby-pm": LightFreezingRainPMImg,
  "Blowing snow-am": LightFreezingRainAMImg,
  "Blowing snow-pm": LightFreezingRainPMImg,
  "Blizzard-am": LightFreezingRainAMImg,
  "Blizzard-pm": LightFreezingRainPMImg,
  "Freezing drizzle-am": LightFreezingRainAMImg,
  "Freezing drizzle-pm": LightFreezingRainPMImg,
  "Heavy freezing drizzle-am": LightFreezingRainAMImg,
  "Heavy freezing drizzle-pm": LightFreezingRainPMImg,
  "Moderate or heavy freezing rain-am": LightFreezingRainAMImg,
  "Moderate or heavy freezing rain-pm": LightFreezingRainPMImg,
  "Patchy light snow-am": LightFreezingRainAMImg,
  "Patchy light snow-pm": LightFreezingRainPMImg,
  "Light snow showers-am": LightFreezingRainAMImg,
  "Light snow showers-pm": LightFreezingRainPMImg,
  "Moderate or heavy snow showers-am": LightFreezingRainAMImg,
  "Moderate or heavy snow showers-pm": LightFreezingRainPMImg,
  "Light snow-am": LightSnowAMImg,
  "Light snow-pm": LightSnowPMImg,
  "Patchy moderate snow-am": LightSnowAMImg,
  "Patchy moderate snow-pm": LightSnowPMImg,
  "Moderate snow-am": LightSnowAMImg,
  "Moderate snow-pm": LightSnowPMImg,
  "Patchy heavy snow-am": LightSnowAMImg,
  "Patchy heavy snow-pm": LightSnowPMImg,
  "Heavy snow-am": LightSnowAMImg,
  "Heavy snow-pm": LightSnowPMImg,
  "Light showers of ice pellets-am": LightSnowAMImg,
  "Light showers of ice pellets-pm": LightSnowPMImg,
  "Moderate or heavy showers of ice pellets-am": LightSnowAMImg,
  "Moderate or heavy showers of ice pellets-pm": LightSnowPMImg,
  "Ice pellets-am": SnowAMImg,
  "Ice pellets-pm": SnowPMImg,
  "Mist-am": MistAMImg,
  "Mist-pm": MistPMImg,
  "Patchy sleet nearby-am": PatchySleetNearbyAMImg,
  "Patchy sleet nearby-pm": PatchySleetNearbyPMImg,
  "Patchy light drizzle-am": PatchySleetNearbyAMImg,
  "Patchy light drizzle-pm": PatchySleetNearbyPMImg,
  "Light drizzle-am": PatchySleetNearbyAMImg,
  "Light drizzle-pm": PatchySleetNearbyPMImg,
  "Fog-am": FogyDayImg,
  "Fog-pm": FogyNightImg,
  "Freezing fog": FogyNightImg,
  "Thundery outbreaks-am": ThunderyOutbreaksAMImg,
  "Thundery outbreaks-pm": ThunderyOutbreaksPMImg,
  "Patchy light rain in area with thunder-am": ThunderyOutbreaksAMImg,
  "Patchy light rain in area with thunder-pm": ThunderyOutbreaksPMImg,
  "ThunderLightRain-am": ThunderLightRainAMImg,
  "ThunderLightRain-pm": ThunderLightRainPMImg,
  "Patchy light snow in area with thunder-am": ThunderLightRainAMImg,
  "Patchy light snow in area with thunder-pm": ThunderLightRainPMImg,
  "ThunderRain-am": ThunderRainAMImg,
  "ThunderRain-pm": ThunderRainPMImg,
};

const defaultImg = sunnyImg;

export function findIcon(oldIcon, dayOrNight) {
  const key = dayOrNight ? `${oldIcon}-${dayOrNight}` : oldIcon;

  if (iconMapping[key]) {
    return iconMapping[key];
  }

  return defaultImg;
}

export function timeIn24Format(lastUpdatedDate) {
  const time = lastUpdatedDate.split(' ')[1]; // Splitting the string and getting the second element
  return time;
}

