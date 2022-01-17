import { Component } from '@angular/core';
import { Footer } from './components/main/footer';
import { MainMenu } from './components/main/main-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';
}
