import { Component } from '@angular/core';
import { Moment } from 'moment';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.html',
  styleUrls: ['./app-footer.scss']
})
export class AppFooter {
  public date: Moment;
  public yearDateFormat: string
  constructor()
  {
    this.yearDateFormat = "YYYY";
  }
}
