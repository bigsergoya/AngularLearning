import { Component } from '@angular/core';
import { Moment } from 'moment';
import { NightModeService } from 'src/app/services/night-mode.service';
import { BaseNightModeComponent } from '../base-nightmode-component';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.html',
  styleUrls: ['./app-footer.scss']
})
export class AppFooter extends BaseNightModeComponent{
  public date: Moment;
  public yearDateFormat: string
  constructor(nightModeService: NightModeService)
  {
    super(nightModeService);
    this.yearDateFormat = "YYYY";
  }
}
