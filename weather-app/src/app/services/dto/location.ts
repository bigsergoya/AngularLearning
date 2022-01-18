import * as moment from "moment"

export interface ILocationDto {
    name: string
    region: string
    country: string
    lat: number
    lon: number
    tz_id: string
    localtime_epoch: number
    localtime: moment.Moment | null
}

export class LocationDto implements ILocationDto {
    name: string
    region: string
    country: string
    lat: number
    lon: number
    tz_id: string
    localtime_epoch: number
    localtime: moment.Moment | null

    constructor(data?: ILocationDto) {
      if (data) {
          for (var property in data) {
              if (data.hasOwnProperty(property))
                  (<any>this)[property] = (<any>data)[property];
          }
      }
    }

    init(_data?: any) {
      if (_data) {
          this.name = _data["name"] !== undefined ? _data["name"] : <any>null;
          this.region = _data["region"] !== undefined ? _data["region"] : <any>null;
          this.country = _data["country"] !== undefined ? _data["country"] : <any>null;
          this.lat = _data["lat"] !== undefined ? _data["lat"] : <any>null;
          this.lon = _data["lon"] !== undefined ? _data["lon"] : <any>null;
          this.tz_id = _data["tz_id"] !== undefined ? _data["tz_id"] : <any>null;
          this.localtime_epoch = _data["localtime_epoch"] !== undefined ? _data["localtime_epoch"] : <any>null;
          this.localtime = _data["start"] ? moment(_data["start"].toString()) : <any>null;       
      }
    }

    static fromJS(data: any): LocationDto {
        data = typeof data === 'object' ? data : {};
        let result = new LocationDto();
        result.init(data);
        return result;
    }
}