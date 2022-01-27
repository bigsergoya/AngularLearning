import { Component, EventEmitter, Input, Output, Inject, HostListener, ViewChild } from '@angular/core';
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

export class forecastDays
{
  constructor(public name: string, public value: ForecastdayDto)
  {

  }
}

@Component({
  selector: 'weather',
  templateUrl: './weather.html',
  styleUrls: ['./weather.scss']
})
export class Weather {
    private readonly _kphToMsMultiplier = 0.277778;
    private readonly _pressureInchesToMmHgMultiplier = 25.4;

    public forecastDays: forecastDays[];
    public selectedDay: ForecastdayDto | undefined;
    public selectedHourIndex: number | undefined;

    public readonly dateShortFormat = "MMMM Do";
    public readonly timeFormat = "h:mm a"

    @Input() currentWeather: CurrentWeatherDto;
    @Input() forecast: ForecastDto;

    @ViewChild(MatChipList) forecastDayList: MatChipList;
  constructor()
  {
    
  }
  
  ngOnInit()
  {
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
        this.selectedDay = this.forecast.forecastdays[i];
        this.selectedHourIndex =  this.selectedDay.hours.findIndex(h => h.time?.hour() == moment().hour());
      }
      else if (i === 1)
      {
        name = "Tomorrow";
      }
      else
      {
        name = moment(this.forecast.forecastdays[i].date).format(this.dateShortFormat)
      }

      
      this.forecastDays.push(new forecastDays(name, this.forecast.forecastdays[i]));
    }
  }

  selectedHourChange(hourIndex: number)
  {
    this.selectedHourIndex = hourIndex;
    console.log(this.selectedDay?.hours[this.selectedHourIndex]);
  }

  selectDay(chip: forecastDays)
  {
    this.selectedDay = chip.value;
    this.forecastDayList._setSelectionByValue(chip.value);
  }

  convert(value: number, measurementUnit:string):string
  {
    switch(measurementUnit)
    {
      case "kph_to_ms":
        return (value * this._kphToMsMultiplier).toFixed();
        break;
      case "pressure_inches_to_mmHg":
        return (value * this._pressureInchesToMmHgMultiplier).toFixed();
        break;

      default:
        return String(value);
    }
  }

  getEPAStateWord(epaState: number):string
  {
    switch(epaState)
    {
      case 1:
        return "Good";
        break;
      case 2:
        return "Moderate";
        break;
      case 3:
        return "Unhealthy for sensitive group";
        break;
      case 4:
        return "Unhealthy";
        break;
      case 5:
        return "Very Unhealthy";
        break;
      case 6:
        return "Hazardous";
        break;
      default:
        return "Unknown";
    }
  }
}
