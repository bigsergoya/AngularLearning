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
import { FullForecastDto } from 'src/app/services/dto/full-forecast';

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
    public selectedDay: ForecastdayDto;
    public selectedHourIndex: number;

    public readonly dateShortFormat = "MMMM Do";
    public readonly timeFormat: string = "h:mm a"

    public fullForecast: FullForecastDto;

    @Input() currentWeather: CurrentWeatherDto;
    @Input() forecast: ForecastDto;

    @ViewChild(MatChipList) forecastDayList: MatChipList;
  constructor()
  {
    
  }
  
  getChanceOfPerception(chance_of_rain: number, chance_of_snow: number)
  {
    return chance_of_rain 
      || chance_of_snow;
  }
  
  syncFullData(selectedDay: ForecastdayDto | null, selectedHourIndex: number | null)
  {
    if(selectedDay)
    {
      this.selectedDay = selectedDay;
    }

    if(selectedHourIndex)
    {
      this.selectedHourIndex =  selectedHourIndex;
    }

    // "Текущий" прогноз по времени совпадает с текущим часом.
    this.fullForecast = new FullForecastDto(this.selectedDay.hours[this.selectedHourIndex],
      moment(this.currentWeather.last_updated).hour() 
      == this.selectedDay.hours[this.selectedHourIndex].time?.hour() 
    ? this.currentWeather
    : null);  
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
        let selectedDay = this.forecast.forecastdays[i];
        let selectedHourIndex =  selectedDay.hours.findIndex(h => h.time?.hour() == moment().hour());
        this.syncFullData(selectedDay, selectedHourIndex);
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

  getHoursText(hours: HourDto[]): string[]
  {
    //{{hour.time | dateFormat:this.timeFormat}}
    let res : string [] = [];

    hours.forEach(hour => {
      if(this.selectedDay.date?.day() == moment().day()
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

  selectedHourChange(hourIndex: number)
  {
    this.syncFullData(null, hourIndex);
  }

  selectDay(chip: forecastDays)
  {
    this.syncFullData(chip.value, null);
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
