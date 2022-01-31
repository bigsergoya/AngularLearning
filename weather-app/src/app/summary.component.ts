import { Component, EventEmitter, Output } from '@angular/core';
import { HttpWeatherService } from './services/http.weather.service';
import { WeatherDataResponseDto } from './services/dto/weather-data-response';
import { HttpSportService } from './services/http.sport.service';
import { SportDataResponseDto } from './services/dto/sport-data-response';
/*import { SliderMode } from './components/slider/slider-mode';*/
import { LocationService } from './services/location.service';
import { ActivatedRoute } from '@angular/router';
import { defer, delay, interval, map, Observable, OperatorFunction, repeatWhen, Subject, Subscription, switchMap, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'summary-component',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  providers: [HttpWeatherService, HttpSportService]
})
export class SummaryComponent {
  
  private readonly timerDelay : number = 300000;  

  private readonly _stop = new Subject<void>()
  
  private timerSubscription: Subscription;
  
  
  public weatherData: WeatherDataResponseDto;
  public location: string;
  public loading: boolean = false;
  public routeSubscription: Subscription;

  constructor(
    private weatherService: HttpWeatherService,
    private locationShareService: LocationService,
    private route: ActivatedRoute)
    {
      this.weatherData = new WeatherDataResponseDto();
    }

  updateWeatherData(): any
  {
    this.weatherService.getData(this.location).subscribe(
      (successData: WeatherDataResponseDto) =>
      {
        this.weatherData = successData;
      },
      (err) =>
      {
        console.log(err);
      }, () => 
      {
        this.loading = false;
      }
    );

    console.log(this.weatherData)
  }

  ngOnInit()
  {
    this.loading = true;

    this.routeSubscription = this.route
    .queryParams
    .subscribe(data => 
      {
        this.location = data["location"];
        this.timerSubscription = timer(0, this.timerDelay)
        .pipe(
          map(() => this.updateWeatherData()),
        ).subscribe();
      });
  }

  ngOnDestroy() {
    this._stop.next();
    this.routeSubscription.unsubscribe();
    this.timerSubscription.unsubscribe();
  }
}