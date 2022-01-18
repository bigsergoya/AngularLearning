import * as moment from "moment";
import { AstroDto } from "./astro";
import { DayDto } from "./day";
import { HourDto } from "./hour";

export interface IForecastdayDto {
    date: moment.Moment | null
    date_epoch: number
    day: DayDto
    astro: AstroDto
    hours: HourDto[]
}

export class ForecastdayDto implements IForecastdayDto {
    date: moment.Moment | null
    date_epoch: number
    day: DayDto
    astro: AstroDto
    hours: HourDto[]

    constructor(data?: IForecastdayDto) {
      if (data) {
          for (var property in data) {
              if (data.hasOwnProperty(property))
                  (<any>this)[property] = (<any>data)[property];
          }
      }
    }

    init(_data?: any) {
      if (_data) {
        this.date = _data["date"] ? moment(_data["date"].toString()) : <any>null;
        this.date_epoch = _data["date_epoch"] !== undefined ? _data["date_epoch"] : <any>null;
        this.day = _data["day"] ? DayDto.fromJS(_data["day"]) : <any>null;
        this.astro = _data["astro"] ? AstroDto.fromJS(_data["astro"]) : <any>null;
        if (Array.isArray(_data["hour"])) {
          this.hours = [] as any;
          for (let item of _data["hour"])
              this.hours.push(HourDto.fromJS(item));
        }
      }
    }

    static fromJS(data: any): ForecastdayDto {
        data = typeof data === 'object' ? data : {};
        let result = new ForecastdayDto();
        result.init(data);
        return result;
    }
}