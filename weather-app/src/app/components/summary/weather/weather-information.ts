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

export class forecastDays
{
  constructor(public name: string, public value: ForecastdayDto)
  {

  }
}

@Component({
  selector: 'weather-information',
  templateUrl: './weather-information.html',
  styleUrls: ['./weather-information.scss']
})
export class WeatherInformation {
    private readonly _kphToMsMultiplier = 0.277778;
    private readonly _pressureInchesToMmHgMultiplier = 25.4;

    public readonly timeFormat: string = "h:mm A"

    @Input() fullForecast: FullForecastDto;

  constructor()
  {
    
  }
  
  getChanceOfPerception(chance_of_rain: number, chance_of_snow: number)
  {
    return chance_of_rain 
      || chance_of_snow;
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

  getEPAStateClass(epaState: number):string
  {
    switch(epaState)
    {
      case 1:
        return "weather-air-quality-state-good";
      case 2:
        return "weather-air-quality-state-moderate";
      case 3:
        return "weather-air-quality-state-unhealthy_for_sensitive_groups";
      case 4:
        return "weather-air-quality-state-unhealthy";
      case 5:
        return "weather-air-quality-state-very-unhealthy";
      case 6:
        return "weather-air-quality-state-very-hazardous";
      default:
        return "Unknown";
    }
  }

  getEPAStateWord(epaState: number):string
  {
    switch(epaState)
    {
      case 1:
        return "Good";
      case 2:
        return "Moderate";
      case 3:
        return "Unhealthy for sensitive group";
      case 4:
        return "Unhealthy";
      case 5:
        return "Very Unhealthy";
      case 6:
        return "Hazardous";
      default:
        return "Unknown";
    }
  }
}