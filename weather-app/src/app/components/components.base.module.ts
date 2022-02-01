import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NightModeService } from '../services/night-mode.service';
import { BaseNightModeComponent } from './base-nightmode-component';
import { MomentPipe } from './moment-pipe';


@NgModule({
  declarations: [
    MomentPipe,
    BaseNightModeComponent
  ],
  imports: [
  ],
  exports:[
    MomentPipe,
    BaseNightModeComponent
  ],
  providers: [NightModeService],
bootstrap: []
})
export class ComponentsBaseModule { }