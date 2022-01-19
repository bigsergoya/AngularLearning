import { Component } from '@angular/core';
import { Footer } from './components/main/footer';
import { MainMenu } from './components/main/main-menu';
import { AppConfigService } from './services/configuration.service';
import { CookieService } from './services/cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CookieService]
})
export class AppComponent {
  title = 'weather-app';
  location: string;

  constructor(private cookieService: CookieService
    , private appConfigService: AppConfigService)
  {
    var test = "test"
  } 

  ngOnInit()
  {
    let cookieVal = this.cookieService.getCookie();

    this.location = cookieVal ? cookieVal : this.appConfigService.defaultLocation;
  }
}