import { Component, Input } from '@angular/core';
import { CurrentWeatherDto } from 'src/app/services/dto/current-weather';
import { ForecastDto } from 'src/app/services/dto/forecast';
import { LocationDto } from 'src/app/services/dto/location';
import { SliderMode } from './slider-mode';

@Component({
  selector: 'slider',
  templateUrl: './slider.html',
  styleUrls: ['./slider.scss']
})
export class Slider {
  @Input() location: LocationDto
  @Input() current: CurrentWeatherDto
  @Input() forecast: ForecastDto
  @Input() mode: SliderMode
}


/*this.sportService.getData('Tula').subscribe(
      (successData: SportDataResponseDto) =>
      {
        var x = successData;
        //this.loading = true;
        //this.handlerResponse(successData);
        //setTimeout(() => (this.loading = false));
      },
      (err) =>
      {
        var z = err;
        //this.handleError(err, this.coneinerEl);
      }
    ); */