import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NightModeService } from '../services/night-mode.service';
import { BaseNightModeComponent } from './base-nightmode-component';
import { LoaderComponent } from './loader';
import { MomentPipe } from './moment-pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    MomentPipe,
    BaseNightModeComponent,
    LoaderComponent
  ],
  imports: [
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  exports:[
    MomentPipe,
    BaseNightModeComponent,
    LoaderComponent
  ],
  providers: [NightModeService],
bootstrap: []
})
export class ComponentsBaseModule { }