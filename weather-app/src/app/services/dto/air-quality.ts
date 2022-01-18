export interface IAirQualityDto
{
  co: number
  no2: number
  o3: number
  so2: number
  pm2_5: number
  pm10: number
  us_epa_index: number
  gb_defra_index: number
}

export class AirQualityDto implements IAirQualityDto {
    co: number
    no2: number
    o3: number
    so2: number
    pm2_5: number
    pm10: number
    us_epa_index: number
    gb_defra_index: number

    constructor(data?: IAirQualityDto) {
      if (data) {
          for (var property in data) {
              if (data.hasOwnProperty(property))
                  (<any>this)[property] = (<any>data)[property];
          }
      }
    }

    init(_data?: any) {
      if (_data) {
          this.co = _data["co"] !== undefined ? _data["co"] : <any>null;
          this.no2 = _data["no2"] !== undefined ? _data["no2"] : <any>null;
          this.o3 = _data["o3"] !== undefined ? _data["o3"] : <any>null;
          this.so2 = _data["so2"] !== undefined ? _data["so2"] : <any>null;
          this.pm2_5 = _data["pm2_5"] !== undefined ? _data["pm2_5"] : <any>null;
          this.pm10 = _data["pm10"] !== undefined ? _data["pm10"] : <any>null;
          this.us_epa_index = _data["us-epa-index"] !== undefined ? _data["us-epa-index"] : <any>null;
          this.gb_defra_index = _data["gb-defra-index"] !== undefined ? _data["gb-defra-index"] : <any>null;
      }
    }

    static fromJS(data: any): AirQualityDto {
        data = typeof data === 'object' ? data : {};
        let result = new AirQualityDto();
        result.init(data);
        return result;
    }
  }