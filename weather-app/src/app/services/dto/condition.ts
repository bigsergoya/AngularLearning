export interface IConditionDto {
    text: string
    icon: string
    code: number
}

export class ConditionDto implements IConditionDto {
    text: string
    icon: string
    code: number

    constructor(data?: IConditionDto) {
      if (data) {
          for (var property in data) {
              if (data.hasOwnProperty(property))
                  (<any>this)[property] = (<any>data)[property];
          }
      }
    }

    init(_data?: any) {
      if (_data) {
          this.text = _data["text"] !== undefined ? _data["text"] : <any>null;
          this.icon = _data["icon"] !== undefined ? _data["icon"] : <any>null;
          this.code = _data["code"] !== undefined ? _data["code"] : <any>null;
      }
    }

    static fromJS(data: any): ConditionDto {
        data = typeof data === 'object' ? data : {};
        let result = new ConditionDto();
        result.init(data);
        return result;
    }
}