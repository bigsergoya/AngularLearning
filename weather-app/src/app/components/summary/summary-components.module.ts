import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*import { PageMenu } from './page-menu';*/
import { WeatherAlarm } from './weather/weather-alarm';
import { WeatherTabs } from './weather/weather-tabs';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MomentPipe } from '../moment-pipe';

import {MatTabsModule} from '@angular/material/tabs';
import { MainComponentsModule } from '../main/main-components.module';
import { ComponentsBaseModule } from '../components.base.module';
import { Weather } from './weather/weather';
import {MatChipsModule} from '@angular/material/chips';
import { ForecastDay } from './weather/forecast-day';
import { WeatherHourSelector } from './weather/weather-hour-selector';
import { WeatherDaySelector } from './weather/weather-day-selector';
import { WeatherInformation } from './weather/weather-information';

@NgModule({
  declarations: [
    /*PageMenu,*/
    WeatherAlarm,
    WeatherTabs,
    Weather,
    WeatherHourSelector,
    WeatherDaySelector,
    WeatherInformation
  ],
  imports: [
    BrowserModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MainComponentsModule, 
    ComponentsBaseModule,
    MatChipsModule
  ],
  exports:[
    /*PageMenu,*/
    WeatherAlarm,
    WeatherTabs
  ],
  providers: [],
bootstrap: []
})
export class SummaryComponentsModule { }