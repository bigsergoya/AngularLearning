import { AlertDto } from "./alert";

export interface IAlertsDto {
    alerts: AlertDto[]
}

export class AlertsDto implements IAlertsDto{
    alerts: AlertDto[]

    constructor(data?: IAlertsDto) {
      if (data) {
          for (var property in data) {
              if (data.hasOwnProperty(property))
                  (<any>this)[property] = (<any>data)[property];
          }
      }
    }

    init(_data?: any) {
      if (_data) {
        if (Array.isArray(_data["alert"])) {
          this.alerts = [] as any;
          for (let item of _data["alert"])
              this.alerts.push(AlertDto.fromJS(item));
        }

      }
    }

    static fromJS(data: any): AlertsDto {
        data = typeof data === 'object' ? data : {};
        let result = new AlertsDto();
        result.init(data);
        return result;
    }
}
