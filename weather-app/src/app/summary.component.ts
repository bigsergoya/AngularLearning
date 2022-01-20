import { Component } from '@angular/core';
import { HttpWeatherService } from './services/http.weather.service';
import { WeatherDataResponseDto } from './services/dto/weather-data-response';
import { HttpSportService } from './services/http.sport.service';
import { SportDataResponseDto } from './services/dto/sport-data-response';
/*import { SliderMode } from './components/slider/slider-mode';*/
import { LocationService } from './services/location.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'summary-component',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  providers: [HttpWeatherService, HttpSportService]
})
export class SummaryComponent {
  public weatherData: WeatherDataResponseDto;
  public location: string;
  /*public sliderMode: SliderMode;*/
  public loading: boolean = false;
  sub: any;
  constructor(
    private weatherService: HttpWeatherService,
    private locationShareService: LocationService,
    private route: ActivatedRoute)
    {
      this.weatherData = new WeatherDataResponseDto();
     /* this.sliderMode = SliderMode.TodayWeather;*/
    }

  ngOnInit()
  {
    this.loading = true;

    this.sub = this.route
    .queryParams
    .subscribe(data => 
      {
        this.location = data["location"];
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

        console.log(data)
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}