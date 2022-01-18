import { ConditionDto } from "./condition";

export interface IDayDto {
    maxtemp_c: number
    maxtemp_f: number
    mintemp_c: number
    mintemp_f: number
    avgtemp_c: number
    avgtemp_f: number
    maxwind_mph: number
    maxwind_kph: number
    totalprecip_mm: number
    totalprecip_in: number
    avgvis_km: number
    avgvis_miles: number
    avghumidity: number
    daily_will_it_rain: boolean
    daily_chance_of_rain: number
    daily_will_it_snow: boolean
    daily_chance_of_snow: number
    condition: ConditionDto
    uv: number
  }

  export class DayDto implements IDayDto {
    maxtemp_c: number
    maxtemp_f: number
    mintemp_c: number
    mintemp_f: number
    avgtemp_c: number
    avgtemp_f: number
    maxwind_mph: number
    maxwind_kph: number
    totalprecip_mm: number
    totalprecip_in: number
    avgvis_km: number
    avgvis_miles: number
    avghumidity: number
    daily_will_it_rain: boolean
    daily_chance_of_rain: number
    daily_will_it_snow: boolean
    daily_chance_of_snow: number
    condition: ConditionDto
    uv: number

    constructor(data?: IDayDto) {
      if (data) {
          for (var property in data) {
              if (data.hasOwnProperty(property))
                  (<any>this)[property] = (<any>data)[property];
          }
      }
    }

    init(_data?: any) {
      if (_data) {
          this.maxtemp_c = _data["maxtemp_c"] !== undefined ? _data["maxtemp_c"] : <any>null;
          this.maxtemp_f = _data["maxtemp_f"] !== undefined ? _data["maxtemp_f"] : <any>null;
          this.mintemp_c = _data["mintemp_c"] !== undefined ? _data["mintemp_c"] : <any>null;
          this.mintemp_f = _data["mintemp_f"] !== undefined ? _data["mintemp_f"] : <any>null;
          this.avgtemp_c = _data["avgtemp_c"] !== undefined ? _data["avgtemp_c"] : <any>null;
          this.avgtemp_f = _data["avgtemp_f"] !== undefined ? _data["avgtemp_f"] : <any>null;
          this.maxwind_mph = _data["maxwind_mph"] !== undefined ? _data["maxwind_mph"] : <any>null;
          this.maxwind_kph = _data["maxwind_kph"] !== undefined ? _data["maxwind_kph"] : <any>null;
          this.totalprecip_mm = _data["totalprecip_mm"] !== undefined ? _data["totalprecip_mm"] : <any>null;
          this.totalprecip_in = _data["totalprecip_in"] !== undefined ? _data["totalprecip_in"] : <any>null;
          this.avgvis_km = _data["avgvis_km"] !== undefined ? _data["avgvis_km"] : <any>null;
          this.avgvis_miles = _data["avgvis_miles"] !== undefined ? _data["avgvis_miles"] : <any>null;
          this.avghumidity = _data["avghumidity"] !== undefined ? _data["avghumidity"] : <any>null;
          this.daily_will_it_rain = _data["daily_will_it_rain"] !== undefined ? _data["daily_will_it_rain"] : <any>null;
          this.daily_chance_of_rain = _data["daily_chance_of_rain"] !== undefined ? _data["daily_chance_of_rain"] : <any>null;
          this.daily_will_it_snow = _data["daily_will_it_snow"] !== undefined ? _data["daily_will_it_snow"] : <any>null;
          this.daily_chance_of_snow = _data["daily_chance_of_snow"] !== undefined ? _data["daily_chance_of_snow"] : <any>null;
          this.condition = _data["condition"] ? ConditionDto.fromJS(_data["condition"]) : <any>null;
          this.uv = _data["uv"] !== undefined ? _data["uv"] : <any>null;
      }
    }

    static fromJS(data: any): DayDto {
        data = typeof data === 'object' ? data : {};
        let result = new DayDto();
        result.init(data);
        return result;
    }
  }