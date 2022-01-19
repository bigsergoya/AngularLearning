import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PageMenu } from './page-menu';
import { WeatherAlarm } from './weather-alarm';
import { Slider } from '../slider/slider';

@NgModule({
  declarations: [
    PageMenu,
    WeatherAlarm,
    Slider
  ],
  imports: [
    BrowserModule,
    
  ],
  exports:[
    PageMenu,
    WeatherAlarm,
    Slider
  ],
  providers: [],
bootstrap: []
})
export class SummaryComponentsModule { }