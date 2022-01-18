import { ForecastdayDto, IForecastdayDto } from "./forecast-day";

export interface IForecastDto {
    forecastdays: ForecastdayDto[]
}

export class ForecastDto implements IForecastDto {
    forecastdays: ForecastdayDto[]

    constructor(data?: IForecastDto) {
      if (data) {
          for (var property in data) {
              if (data.hasOwnProperty(property))
                  (<any>this)[property] = (<any>data)[property];
          }
      }
    }

    init(_data?: any) {
      if (_data) {
        if (Array.isArray(_data["forecastday"])) {
          this.forecastdays = [] as any;
          for (let item of _data["forecastday"])
              this.forecastdays.push(ForecastdayDto.fromJS(item));
        }

      }
    }

    static fromJS(data: any): ForecastDto {
        data = typeof data === 'object' ? data : {};
        let result = new ForecastDto();
        result.init(data);
        return result;
    }
}