// В силу рукожопости разработчиков API мне пришлось сделать этот класс, который бы объединил
// ту часть данных, которых нет в прогнозе на час и которыйх нет в текущем прогнозе.

import * as moment from "moment";
import { AirQualityDto } from "./air-quality";
import { AstroDto, IAstroDto } from "./astro";
import { ConditionDto } from "./condition";
import { ICurrentWeatherDto } from "./current-weather";
import { IForecastBaseDto } from "./forecast-base";
import { IHourDto } from "./hour";

  export class FullForecastDto implements IHourDto, IForecastBaseDto, ICurrentWeatherDto{
    last_updated_epoch: number
    last_updated: moment.Moment
    time_epoch: number
    time: moment.Moment | null
    temp_c: number
    temp_f: number
    is_day: boolean
    condition: ConditionDto
    wind_mph: number
    wind_kph: number
    wind_degree: number
    wind_dir: string
    pressure_mb: number
    pressure_in: number
    precip_mm: number
    precip_in: number
    humidity: number
    cloud: number
    feelslike_c: number
    feelslike_f: number
    windchill_c: number
    windchill_f: number
    heatindex_c: number
    heatindex_f: number
    dewpoint_c: number
    dewpoint_f: number
    will_it_rain: number
    chance_of_rain: number
    will_it_snow: number
    chance_of_snow: number
    vis_km: number
    vis_miles: number
    gust_mph: number
    gust_kph: number
    uv: number
    air_quality: AirQualityDto
    astro: AstroDto

    constructor(hourDto: IHourDto | null, astroDto: IAstroDto, currentWeatherDto: ICurrentWeatherDto | null, isHourOwerriteCurrent: boolean)
    {
      if(isHourOwerriteCurrent)
      {     
        this.addProperties(currentWeatherDto);
        this.addProperties(hourDto);
      }
      else
      {
        this.addProperties(hourDto);
        this.addProperties(currentWeatherDto);
      }

      this.astro = astroDto as AstroDto;
    }

    addProperties(data?: IHourDto | ICurrentWeatherDto | null)
    {
      if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
      }
    }

    /*init(_data?: any) {
      if (_data) {
          this.last_updated_epoch = _data["last_updated_epoch"] !== undefined ? _data["last_updated_epoch"] : <any>null;
          this.last_updated = _data["last_updated"] ? moment(_data["last_updated"].toString()) : <any>null;
          this.time_epoch = _data["time_epoch"] !== undefined ? _data["time_epoch"] : <any>null;
          this.time = _data["time"] ? moment(_data["time"].toString()) : <any>null;
          this.temp_c = _data["temp_c"] !== undefined ? _data["temp_c"] : <any>null;
          this.temp_f = _data["temp_f"] !== undefined ? _data["temp_f"] : <any>null;
          this.is_day = _data["is_day"] !== undefined ? _data["is_day"] : <any>null;
          this.condition = _data["condition"] ? ConditionDto.fromJS(_data["condition"]) : <any>null;
          this.wind_mph = _data["wind_mph"] !== undefined ? _data["wind_mph"] : <any>null;
          this.wind_kph = _data["wind_kph"] !== undefined ? _data["wind_kph"] : <any>null;
          this.wind_degree = _data["wind_degree"] !== undefined ? _data["wind_degree"] : <any>null;
          this.wind_dir = _data["wind_dir"] !== undefined ? _data["wind_dir"] : <any>null;
          this.pressure_mb = _data["pressure_mb"] !== undefined ? _data["pressure_mb"] : <any>null;
          this.pressure_in = _data["pressure_in"] !== undefined ? _data["pressure_in"] : <any>null;
          this.precip_mm = _data["precip_mm"] !== undefined ? _data["precip_mm"] : <any>null;
          this.precip_in = _data["precip_in"] !== undefined ? _data["precip_in"] : <any>null;
          this.humidity = _data["humidity"] !== undefined ? _data["humidity"] : <any>null;
          this.cloud = _data["cloud"] !== undefined ? _data["cloud"] : <any>null;
          this.feelslike_c = _data["feelslike_c"] !== undefined ? _data["feelslike_c"] : <any>null;
          this.feelslike_f = _data["feelslike_f"] !== undefined ? _data["feelslike_f"] : <any>null;
          this.windchill_c = _data["windchill_c"] !== undefined ? _data["windchill_c"] : <any>null;
          this.windchill_f = _data["windchill_f"] !== undefined ? _data["windchill_f"] : <any>null;
          this.heatindex_c = _data["heatindex_c"] !== undefined ? _data["heatindex_c"] : <any>null;
          this.heatindex_f = _data["heatindex_f"] !== undefined ? _data["heatindex_f"] : <any>null;
          this.dewpoint_c = _data["dewpoint_c"] !== undefined ? _data["dewpoint_c"] : <any>null;
          this.dewpoint_f = _data["dewpoint_f"] !== undefined ? _data["dewpoint_f"] : <any>null;
          this.will_it_rain = _data["will_it_rain"] !== undefined ? _data["will_it_rain"] : <any>null;
          this.chance_of_rain = _data["chance_of_rain"] !== undefined ? _data["chance_of_rain"] : <any>null;
          this.will_it_snow = _data["will_it_snow"] !== undefined ? _data["will_it_snow"] : <any>null;
          this.chance_of_snow = _data["chance_of_snow"] !== undefined ? _data["chance_of_snow"] : <any>null;
          this.vis_km = _data["vis_km"] !== undefined ? _data["vis_km"] : <any>null;
          this.vis_miles = _data["vis_miles"] !== undefined ? _data["vis_miles"] : <any>null;
          this.gust_mph = _data["gust_mph"] !== undefined ? _data["gust_mph"] : <any>null;
          this.gust_kph = _data["gust_kph"] !== undefined ? _data["gust_kph"] : <any>null;
          this.uv = _data["uv"] !== undefined ? _data["uv"] : <any>null;
          this.air_quality = _data["air_quality"] ? AirQualityDto.fromJS(_data["air_quality"]) : <any>null;
      }
    }*/
  }