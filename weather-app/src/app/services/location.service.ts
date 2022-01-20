import { Injectable } from "@angular/core";
import { AppConfigService } from "./configuration.service";
import { CookieService } from "./cookie.service";

@Injectable()
export class LocationService {

    private location: string;

    constructor(private cookieService: CookieService
        , private appConfigService: AppConfigService)
      {
      } 

    setLocation(loc: string)
    {
        this.location = loc;
        this.cookieService.setCookie(loc, 30);
    }

    getLocation(): string
    {
        if (!this.location)
        {
            let cookieVal = this.cookieService.getCookie();
            this.location = cookieVal ? cookieVal : this.appConfigService.defaultLocation;
        }

        return this.location;   
    }
}