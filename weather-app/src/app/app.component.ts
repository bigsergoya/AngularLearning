import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Footer } from './components/main/footer';
import { MainMenu } from './components/main/main-menu';
import { LocationService } from './services/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {
  title = 'weather-app';
  location: string;
  sub: any;

  constructor(private locationService: LocationService, public router: Router,
    private activatedRoute: ActivatedRoute)
  {
  } 

  ngOnInit()
  {
    this.router.events.subscribe(
      (event) => {
        if (event instanceof NavigationEnd) {
            let location = this.activatedRoute.snapshot.queryParamMap.has('location') 
              ? this.activatedRoute.snapshot.queryParamMap.get('location')
              : null;
            if(location)
            {
              this.location = location;
              this.locationService.setLocation(location);
            }
            else
            {
              this.location = this.locationService.getLocation();
              this.navigateToLoc(this.location)
            }
        }
      });
  }

  onlocationQueryChange(loc: string)
  {
    this.locationService.setLocation(loc);
    this.navigateToLoc(loc);
  }

  navigateToLoc(loc: string)
  {
    this.router.navigate(
      ['/summary'], 
      {
          queryParams:{
              'location': loc
          }
      })
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}