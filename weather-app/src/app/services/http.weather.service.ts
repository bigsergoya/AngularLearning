import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { WeatherDataResponseDto } from './dto/weather-data-response';

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { HttpServiceBase } from './http.service.base';
import { AppConfigService } from './configuration.service';

@Injectable()
export class HttpWeatherService extends HttpServiceBase{
    private readonly weatherApiUrlPart = 'forecast.json?'
    constructor(private http: HttpClient, private appConfigService: AppConfigService){ super() }
      
    getData(query: string,
         days: number = 3, 
         isShowAirQuality: boolean = true, 
         isShowAlerts: boolean = true,
         lang: string = "en"): Observable<WeatherDataResponseDto>{        
        var url = this.appConfigService.apiBaseUrl + this.weatherApiUrlPart;
        if (query === null)
            throw new Error("The parameter 'Query' cannot be null.");

        url += "key=" + encodeURIComponent(this.appConfigService.apiKey) + "&";
        url += "q=" + encodeURIComponent(query) + "&";
        url += "days=" + encodeURIComponent("" + days) + "&";
        url += "aqi=" + encodeURIComponent(isShowAirQuality ? 'yes' : 'no') + "&";
        url += "alerts=" + encodeURIComponent(isShowAlerts ? 'yes' : 'no') + "&";
        url += "lang=" + encodeURIComponent(lang);

        let options : any = {
            observe: "response", 
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("get", url, options).pipe(_observableMergeMap((response_ : any) => {
            return this.processWeatherDataResponse(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processWeatherDataResponse(<any>response_);
                } catch (e) {
                    return <Observable<WeatherDataResponseDto>><any>_observableThrow(e);
                }
            } else
                return <Observable<WeatherDataResponseDto>><any>_observableThrow(response_);
        }));
    }

    protected processWeatherDataResponse(response: HttpResponseBase): Observable<WeatherDataResponseDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;
    
        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = WeatherDataResponseDto.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return this.throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<WeatherDataResponseDto>(<any>null);
      }
}