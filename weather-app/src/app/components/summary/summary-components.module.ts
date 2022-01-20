import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*import { PageMenu } from './page-menu';*/
import { WeatherAlarm } from './weather-alarm';
import { Slider } from '../slider/slider';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MomentPipe } from './moment-pipe';

import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    /*PageMenu,*/
    WeatherAlarm,
    Slider,
    MomentPipe
  ],
  imports: [
    BrowserModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ],
  exports:[
    /*PageMenu,*/
    WeatherAlarm,
    Slider
  ],
  providers: [],
bootstrap: []
})
export class SummaryComponentsModule { }