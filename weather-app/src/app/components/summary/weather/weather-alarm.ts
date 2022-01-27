import { Component, Input } from '@angular/core';
import { AlertsDto } from 'src/app/services/dto/alerts';

@Component({
  selector: 'weather-alarm',
  templateUrl: './weather-alarm.html',
  styleUrls: ['./weather-alarm.scss']
})
export class WeatherAlarm {
  public dateFormat = "MMMM Do, h:mm a";
  @Input() alerts: AlertsDto;
}
