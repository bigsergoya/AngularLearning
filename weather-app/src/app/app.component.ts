import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { AppFooter } from './components/main/app-footer';
import { MainMenu } from './components/main/main-menu';
import { LocationService } from './services/location.service';
import { MobileMenu } from './components/main/mobile-menu';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {
  readonly summaryPageRouteOrder: number = 1;
  title = 'weather-app';
  location: string;
  sub: any;
  showMobileMenu: boolean;
  @ViewChild(MatDrawer) sidebarDrawer: MatDrawer;

  constructor(private locationService: LocationService, public router: Router,
    private activatedRoute: ActivatedRoute)
  {
  } 

  ngOnInit()
  {
    this.router.events.subscribe(
      (event) => {
        if (event instanceof NavigationEnd)
        {
          let urlWithoutFirstSlash = this.router.parseUrl(this.router.url).root.children["primary"].segments[0].path;
          let summaryPageUrl = this.router.config[this.summaryPageRouteOrder].path;
          if(summaryPageUrl && summaryPageUrl.toLowerCase() 
              !== urlWithoutFirstSlash.toLowerCase())
          { // Not Summary page
            this.location = this.locationService.getLocation();
            return;
          }
          

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

  onMobileMenuButtonClick()
  {
    this.sidebarDrawer.toggle()
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