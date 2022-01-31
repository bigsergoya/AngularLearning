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
import { ForecastDay } from './forecast-day';



@Component({
  selector: 'weather-day-selector',
  templateUrl: './weather-day-selector.html',
  styleUrls: ['./weather-day-selector.scss']
})
export class WeatherDaySelector {
    @Input() forecastDays: ForecastDay[];
    @Output() onSelectedDayChange = new EventEmitter<ForecastDay>();

    @ViewChild(MatChipList) forecastDayList: MatChipList;
  constructor()
  {
    
  }
  
  selectDay(chip: ForecastDay)
  {
    this.onSelectedDayChange.emit(chip);
    this.forecastDayList._setSelectionByValue(chip.index);
  }
}
