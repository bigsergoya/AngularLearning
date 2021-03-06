import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule, ActivatedRoute} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SummaryComponent } from './summary.component';
import { AboutComponent } from './about.component';
import { NotFoundComponent } from './not-found.component';

import { MainComponentsModule } from './components/main/main-components.module';
import { SummaryComponentsModule } from './components/summary/summary-components.module';
import { HttpClientModule } from '@angular/common/http';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

import { APP_INITIALIZER } from '@angular/core';
import { AppConfigService } from './services/configuration.service';
import { CookieService } from './services/cookie.service';
import { LocationService } from './services/location.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NightModeService } from './services/night-mode.service';
import { HttpWeatherService } from './services/http.weather.service';
import { HttpSportService } from './services/http.sport.service';
import { ComponentsBaseModule } from './components/components.base.module';

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
    HttpClientModule,

    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    ComponentsBaseModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    multi: true,
    deps: [AppConfigService],
    useFactory: (appConfigService: AppConfigService) => {
      return () => {
        //Make sure to return a promise!
        return appConfigService.loadAppConfig();
      };
    }
  }, CookieService, LocationService, NightModeService, HttpWeatherService, HttpSportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
