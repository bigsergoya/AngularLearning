import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PageMenu } from './page-menu';
import { WeatherAlarm } from './weather-alarm';
import { WeatherCarousel } from './weather-carousel';

@NgModule({
  declarations: [
    PageMenu,
    WeatherAlarm,
    WeatherCarousel
  ],
  imports: [
    BrowserModule,
    
  ],
  exports:[
    PageMenu,
    WeatherAlarm,
    WeatherCarousel
  ],
  providers: [],
bootstrap: []
})
export class SummaryComponentsModule { }
