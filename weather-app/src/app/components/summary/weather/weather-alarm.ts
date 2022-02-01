import { Component, Input } from '@angular/core';
import { AlertsDto } from 'src/app/services/dto/alerts';
import { BaseNightModeComponent } from '../../base-nightmode-component';

@Component({
  selector: 'weather-alarm',
  templateUrl: './weather-alarm.html',
  styleUrls: ['./weather-alarm.scss']
})
export class WeatherAlarm extends BaseNightModeComponent {
  @Input() alerts: AlertsDto;
}
