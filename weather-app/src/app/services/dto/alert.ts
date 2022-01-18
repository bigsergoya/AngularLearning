import * as moment from "moment";

export interface IAlertDto {
    headline: string 
    msgtype: string
    severity: string
    urgency: string
    areas: string
    category: string
    certainty: string
    event: string
    note: string
    effective: moment.Moment | null 
    expires: moment.Moment | null
    desc: string 
    instruction: string 
  }

  export class AlertDto implements IAlertDto
  {
    headline: string 
    msgtype: string
    severity: string
    urgency: string
    areas: string
    category: string
    certainty: string
    event: string
    note: string
    effective: moment.Moment | null 
    expires: moment.Moment | null
    desc: string 
    instruction: string 

    constructor(data?: IAlertDto) {
      if (data) {
          for (var property in data) {
              if (data.hasOwnProperty(property))
                  (<any>this)[property] = (<any>data)[property];
          }
      }
    }

    init(_data?: any) {
      if (_data) {
          this.headline = _data["headline"] !== undefined ? _data["headline"] : <any>null;
          this.msgtype = _data["msgtype"] !== undefined ? _data["msgtype"] : <any>null;
          this.urgency = _data["urgency"] !== undefined ? _data["urgency"] : <any>null;
          this.areas = _data["areas"] !== undefined ? _data["areas"] : <any>null;
          this.category = _data["category"] !== undefined ? _data["category"] : <any>null;
          this.certainty = _data["certainty"] !== undefined ? _data["certainty"] : <any>null;
          this.event = _data["event"] !== undefined ? _data["event"] : <any>null;
          this.note = _data["note"] !== undefined ? _data["note"] : <any>null;
          this.effective = _data["effective"] ? moment(_data["effective"].toString()) : <any>null;
          this.expires = _data["expires"] ? moment(_data["expires"].toString()) : <any>null;
          this.desc = _data["desc"] !== undefined ? _data["desc"] : <any>null;
          this.instruction = _data["instruction"] !== undefined ? _data["instruction"] : <any>null;
      }
    }

    static fromJS(data: any): AlertDto {
        data = typeof data === 'object' ? data : {};
        let result = new AlertDto();
        result.init(data);
        return result;
    }
}