import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IAppConfig } from './dto/app-config';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root'
  })
  export class AppConfigService {
  
    private appConfig: IAppConfig;
  
    constructor(private http: HttpClient) { }
  
    loadAppConfig() {
      return this.http.get(`assets/config/config.${environment.name}.json`)
        .toPromise()
        .then(data => {
          this.appConfig = <IAppConfig>data;
        });
    }
  
    // This is an example property ... you can make it however you want.
    get apiBaseUrl() {
  
      if (!this.appConfig) {
        throw Error('Config file not loaded!');
      }
  
      return this.appConfig.api.baseUrl;
    }

    get apiKey() {
        if (!this.appConfig) {
            throw Error('Config file not loaded!');
        }
      
        return this.appConfig.api.key;
    }

    get locationCookieName() {
        if (!this.appConfig) {
            throw Error('Config file not loaded!');
        }
      
        return this.appConfig.location.cookieName;
    }

    get defaultLocation()
    {
        if (!this.appConfig) {
            throw Error('Config file not loaded!');
        }
      
        return this.appConfig.location.default;
    }
  }