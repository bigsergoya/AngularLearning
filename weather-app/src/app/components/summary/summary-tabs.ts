import { Component, Input } from '@angular/core';
import { CurrentWeatherDto } from 'src/app/services/dto/current-weather';
import { ForecastDto } from 'src/app/services/dto/forecast';
import { LocationDto } from 'src/app/services/dto/location';
import { SportDataResponseDto } from 'src/app/services/dto/sport-data-response';
import { SportEventDto } from 'src/app/services/dto/sport-event';
import { HttpSportService } from 'src/app/services/http.sport.service';
import { NightModeService } from 'src/app/services/night-mode.service';
import { BaseNightModeComponent } from '../base-nightmode-component';
import { SportDisciplineToEvents } from './sport/sport-discipline-to-events';

@Component({
  selector: 'summary-tabs',
  templateUrl: './summary-tabs.html',
  styleUrls: ['./summary-tabs.scss'],
  providers: [HttpSportService]
})
export class SummaryTabs extends BaseNightModeComponent {
  private readonly sportTabIndex = 1;

  public sportDataIsLoading: boolean = false;
  public sportData: SportDisciplineToEvents[];
  @Input() location: string
  @Input() current: CurrentWeatherDto
  @Input() forecast: ForecastDto

  constructor(private sportService: HttpSportService,
     nightModeService: NightModeService)
  {
    super(nightModeService);
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
              this.sportData.push(new SportDisciplineToEvents(item[0], item[1]));
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
}