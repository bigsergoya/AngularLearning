import { Component } from '@angular/core';
import { HttpWeatherService } from './services/http.weather.service';
import { WeatherDataResponseDto } from './services/dto/weather-data-response';
import { HttpSportService } from './services/http.sport.service';
import { SportDataResponseDto } from './services/dto/sport-data-response';
import { SliderMode } from './components/slider/slider-mode';

@Component({
  selector: 'summary-component',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  providers: [HttpWeatherService, HttpSportService]
})
export class SummaryComponent {
  public weatherData: WeatherDataResponseDto;
  public sliderMode: SliderMode;
  public loading: boolean = false;
  constructor(
    private weatherService: HttpWeatherService,
    private sportService: HttpSportService )
    {
      this.weatherData = new WeatherDataResponseDto();
      this.sliderMode = SliderMode.TodayWeather;
    }

  ngOnInit()
  {
    this.loading = true;
    this.weatherService.getData('Tula').subscribe(
      (successData: WeatherDataResponseDto) =>
      {
        this.weatherData = successData;
        //this.loading = true;
        //this.handlerResponse(successData);
        //setTimeout(() => (this.loading = false));
      },
      (err) =>
      {
        var z = err;
        //this.handleError(err, this.coneinerEl);
      }, () => 
      {
        this.loading = false;
      }
    );
    console.log("res");
  }
}