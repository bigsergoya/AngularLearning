import { AlertsDto } from "./alerts";
import { CurrentWeatherDto } from "./current-weather"; 
import { ForecastDto } from "./forecast";
import { LocationDto } from "./location";

export interface IWeatherDataResponseDto {
    location: LocationDto
    current: CurrentWeatherDto
    forecast: ForecastDto
    alerts: AlertsDto
}

export class WeatherDataResponseDto {
    location: LocationDto
    current: CurrentWeatherDto
    forecast: ForecastDto
    alerts: AlertsDto

    constructor(data?: IWeatherDataResponseDto) {
      if (data) {
          for (var property in data) {
              if (data.hasOwnProperty(property))
                  (<any>this)[property] = (<any>data)[property];
          }
      }
    }

    init(_data?: any) {
      if (_data) {
        this.location = _data["location"] ? LocationDto.fromJS(_data["location"]) : <any>null;
        this.current = _data["current"] ? CurrentWeatherDto.fromJS(_data["current"]) : <any>null;
        this.forecast = _data["forecast"] ? ForecastDto.fromJS(_data["forecast"]) : <any>null;
        this.alerts = _data["alerts"] ? AlertsDto.fromJS(_data["alerts"]) : <any>null;
      }
    }

    static fromJS(data: any): WeatherDataResponseDto {
        data = typeof data === 'object' ? data : {};
        let result = new WeatherDataResponseDto();
        result.init(data);
        return result;
    }
}