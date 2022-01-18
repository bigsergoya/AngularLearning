export interface IAstroDto {
    sunrise: string
    sunset: string
    moonrise: string
    moonset: string
    moon_phase: string
    moon_illumination: string
  }

  export class AstroDto implements IAstroDto {
    sunrise: string
    sunset: string
    moonrise: string
    moonset: string
    moon_phase: string
    moon_illumination: string

    constructor(data?: IAstroDto) {
      if (data) {
          for (var property in data) {
              if (data.hasOwnProperty(property))
                  (<any>this)[property] = (<any>data)[property];
          }
      }
    }

    init(_data?: any) {
      if (_data) {
          this.sunrise = _data["sunrise"] !== undefined ? _data["sunrise"] : <any>null;
          this.sunset = _data["sunset"] !== undefined ? _data["sunset"] : <any>null;
          this.moonrise = _data["moonrise"] !== undefined ? _data["moonrise"] : <any>null;
          this.moonset = _data["moonset"] !== undefined ? _data["moonset"] : <any>null;
          this.moon_phase = _data["moon_phase"] !== undefined ? _data["moon_phase"] : <any>null;
          this.moon_illumination = _data["moon_illumination"] !== undefined ? _data["moon_illumination"] : <any>null;
      }
    }

    static fromJS(data: any): AstroDto {
        data = typeof data === 'object' ? data : {};
        let result = new AstroDto();
        result.init(data);
        return result;
    }
  }