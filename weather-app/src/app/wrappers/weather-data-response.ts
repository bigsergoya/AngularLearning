import { Alerts } from "./alerts";
import { CurrentWeather } from "./current-weather"; 
import { Forecast } from "./forecast";
import { Location } from "./location";

export interface WeatherDataResponse {
    location: Location
    current: CurrentWeather
    forecast: Forecast
    alerts: Alerts
  }