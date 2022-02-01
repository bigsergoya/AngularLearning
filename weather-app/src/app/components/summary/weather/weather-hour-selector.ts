import { Component, EventEmitter, Input, Output, Inject, HostListener, ViewChild, SimpleChanges, OnChanges } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { CurrentWeatherDto } from 'src/app/services/dto/current-weather';
import { ForecastDto } from 'src/app/services/dto/forecast';
import * as moment from 'moment';
import { ForecastdayDto } from 'src/app/services/dto/forecast-day';
import { MatChipList } from '@angular/material/chips';
import { HourDto } from 'src/app/services/dto/hour';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { FullForecastDto } from 'src/app/services/dto/full-forecast';
import { BaseNightModeComponent } from '../../base-nightmode-component';
import { NightModeService } from 'src/app/services/night-mode.service';

@Component({
  selector: 'weather-hour-selector',
  templateUrl: './weather-hour-selector.html',
  styleUrls: ['./weather-hour-selector.scss']
})
export class WeatherHourSelector extends BaseNightModeComponent {
    @Input() hours: string [];
    @Input() selectedHourIndex: number;
    @Output() onSelectedHourChange = new EventEmitter<number>();
    
  selectedHourChange(hourIndex: number)
  {
    this.onSelectedHourChange.emit(hourIndex);
  }
}
