import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { WeatherDataResponse } from '../wrappers/weather-data-response';
import { AppModule } from '../app.module';
  
@Injectable(
    {
         providedIn: AppModule
    }
)
export class HttpWeatherService{
    // TODO
    // Bad practise. SHOULD BE MOVED TO SERVER SIDE.
    readonly oauthToken = "c3c2d8a869094d8891b100437221101 ";
    readonly serviceUrl = 'https://api.weatherapi.com/v1/forecast.json'
    constructor(private http: HttpClient){ }
      
    getData(days: number = 3, isShowAirQuality: boolean = true, isShowAlerts: boolean = true){
         const params = new HttpParams()
            .set('days', days)
            .set('aqi', isShowAirQuality ? 'yes' : 'no')
            .set('alerts', isShowAlerts ? 'yes' : 'no');

        const request = new HttpRequest('GET', this.serviceUrl, null, {params});

        return this.http.request<WeatherDataResponse>(request);
    }
}