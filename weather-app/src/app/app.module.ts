import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SummaryComponent } from './summary.component';
import { AboutComponent } from './about.component';
import { NotFoundComponent } from './not-found.component';

import { MainComponentsModule } from './components/main/main-components.module';
import { SummaryComponentsModule } from './components/summary/summary-components.module';
import { HttpClientModule } from '@angular/common/http';
import { Slider } from './components/summary/slider';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    NotFoundComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainComponentsModule,
    SummaryComponentsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
