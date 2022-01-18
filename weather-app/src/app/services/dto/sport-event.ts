import * as moment from 'moment';

export interface ISportEventDto {
    stadium: string
    country: string
    region: string
    tournament: string
    start: moment.Moment | null
    match: string
}

export class SportEventDto implements ISportEventDto {
    stadium: string
    country: string
    region: string
    tournament: string
    start: moment.Moment | null
    match: string

    constructor(data?: ISportEventDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
      }
  
      init(_data?: any) {
        if (_data) {
            this.stadium = _data["stadium"] !== undefined ? _data["stadium"] : <any>null;
            this.country = _data["country"] !== undefined ? _data["country"] : <any>null;
            this.region = _data["region"] !== undefined ? _data["region"] : <any>null;
            this.tournament = _data["tournament"] !== undefined ? _data["tournament"] : <any>null;
            this.start = _data["start"] ? moment.utc(_data["start"].toString()).local() : <any>null;
            this.match = _data["match"] !== undefined ? _data["match"] : <any>null;       
        }
      }
  
      static fromJS(data: any): SportEventDto {
          data = typeof data === 'object' ? data : {};
          let result = new SportEventDto();
          result.init(data);
          return result;
      }
}