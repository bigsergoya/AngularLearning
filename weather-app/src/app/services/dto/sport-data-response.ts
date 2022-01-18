import { SportEventDto } from "./sport-event";

export interface ISportDataResponseDto {
    football: SportEventDto[]
    cricket: SportEventDto[]
    golf: SportEventDto[]
}

export class SportDataResponseDto implements ISportDataResponseDto {
    football: SportEventDto[]
    cricket: SportEventDto[]
    golf: SportEventDto[]

    constructor(data?: ISportDataResponseDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
      }
  
      init(_data?: any) {
        if (_data) {
          if (Array.isArray(_data["football"])) {
            this.football = [] as any;
            for (let item of _data["football"])
                this.football.push(SportEventDto.fromJS(item));
          }
          if (Array.isArray(_data["cricket"])) {
            this.cricket = [] as any;
            for (let item of _data["cricket"])
                this.cricket.push(SportEventDto.fromJS(item));
          }
          if (Array.isArray(_data["golf"])) {
            this.golf = [] as any;
            for (let item of _data["golf"])
                this.golf.push(SportEventDto.fromJS(item));
          }
        }
      }
  
      static fromJS(data: any): SportDataResponseDto {
          data = typeof data === 'object' ? data : {};
          let result = new SportDataResponseDto();
          result.init(data);
          return result;
      }
}