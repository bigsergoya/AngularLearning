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
import { BaseNightModeComponent } from '../../base-nightmode-component';

@Component({
  selector: 'weather',
  templateUrl: './weather.html',
  styleUrls: ['./weather.scss']
})
export class Weather extends BaseNightModeComponent implements OnChanges  {
    public forecastDays: ForecastDay[];
    //public selectedDay: ForecastdayDto;
    public selectedDayIndex: number;
    public selectedHourIndex: number;
    public hoursText: string[];

    public fullForecast: FullForecastDto;

    @Input() currentWeather: CurrentWeatherDto;
    @Input() forecast: ForecastDto;
  
  ngOnChanges(changes: SimpleChanges) {
    this.syncFullData();
  }

  syncFullData(selectedDayIndex: number = -1, selectedHourIndex: number = -1)
  {
    if(selectedDayIndex >= 0)
    {
      this.selectedDayIndex = selectedDayIndex;
    }

    if(selectedHourIndex >= 0)
    {
      this.selectedHourIndex =  selectedHourIndex;
    }

    if(this.selectedDayIndex >= 0)
    {
      let forecastDays = this.forecast.forecastdays;
      // "Текущий" прогноз по времени совпадает с текущим часом.
      this.fullForecast = new FullForecastDto(
        forecastDays[this.selectedDayIndex].hours[this.selectedHourIndex],
        forecastDays[this.selectedDayIndex].astro,
        this.currentWeather,
        moment(this.currentWeather.last_updated).hour() 
          != forecastDays[this.selectedDayIndex].hours[this.selectedHourIndex].time?.hour());  

      this.hoursText = this.getHoursText(forecastDays[this.selectedDayIndex].hours);
    }
  }

  override ngOnInit()
  {
    super.ngOnInit()
    this.forecastDays = [];
    
    if(!this.forecast || !this.forecast.forecastdays)
    {
      return;
    }

    for (let i = 0; i < this.forecast.forecastdays.length; i++)
    {
      let name = "";
      if (i === 0)
      {
        name = "Today";
        let selectedDayIndex = i;
        let selectedHourIndex =  this.forecast.forecastdays[selectedDayIndex]
          .hours.findIndex(h => h.time?.hour() == moment().hour());
        this.syncFullData(selectedDayIndex, selectedHourIndex);
      }
      else if (i === 1)
      {
        name = "Tomorrow";
      }
      else
      {
        name = moment(this.forecast.forecastdays[i].date).format(this.dateShortFormat)
      }

      
      this.forecastDays.push(new ForecastDay(name, i));
    }
  }

  onSelectedHourChange(hourIndex: number)
  {
    this.syncFullData(-1, hourIndex);
  }

  onSelectedDayChange(day: ForecastDay)
  {
    this.syncFullData(day.index, -1); 
  }

  getHoursText(hours: HourDto[]): string[]
  {
    let res : string [] = [];

    hours.forEach(hour => {
      if(this.forecast.forecastdays[this.selectedDayIndex].date?.day() == moment().day()
        && hour.time?.hour() === moment().hour())
      {
        res.push("Now");
      }
      else
      {
        res.push(hour.time.format(this.timeFormat))
      }
    });

    return res;
  }
}