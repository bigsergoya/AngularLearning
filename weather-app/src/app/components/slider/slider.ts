import { Component, Input } from '@angular/core';
import { CurrentWeatherDto } from 'src/app/services/dto/current-weather';
import { ForecastDto } from 'src/app/services/dto/forecast';
import { LocationDto } from 'src/app/services/dto/location';
import { SportDataResponseDto } from 'src/app/services/dto/sport-data-response';
import { SportEventDto } from 'src/app/services/dto/sport-event';
import { HttpSportService } from 'src/app/services/http.sport.service';
/*import { SliderMode } from './slider-mode';*/

export class SportType
{
  constructor(public typeName: string, public events: SportEventDto[])
  {

  }
} 

@Component({
  selector: 'slider',
  templateUrl: './slider.html',
  styleUrls: ['./slider.scss'],
  providers: [HttpSportService]
})
export class Slider {
  readonly sportTabIndex = 2;
  public dateShortFormat = "MMMM Do";
  public dateFullFormat = "MMMM Do, h:mm a"
  public timeFormat = "h:mm a"
  public sportDataIsLoading: boolean = false;
  public sportData: SportType[];
  @Input() location: string
  @Input() current: CurrentWeatherDto
  @Input() forecast: ForecastDto
  /*@Input() mode: SliderMode*/

  constructor(private sportService: HttpSportService)
  {
  }
  selectedMainTabIndexChange(index:number)
  {
    if(index === this.sportTabIndex)
    {
      this.sportDataIsLoading = true;
      this.sportService.getData(this.location).subscribe(
        (successData: SportDataResponseDto) =>
        {
          var x = Object.keys(successData) as Array<keyof typeof successData>;
          this.sportData = [];
          Object.entries(successData).forEach(item =>
            {           
              this.sportData.push(new SportType(item[0], item[1]));
            })
        },
        (err) =>
        {
          console.log(err);
        },
        () => 
        {
          this.sportDataIsLoading = false;
        }
      ); 
    }
  }

/**/
}