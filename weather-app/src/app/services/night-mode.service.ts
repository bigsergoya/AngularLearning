import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { AppConfigService } from "./configuration.service";
import { CookieService } from "./cookie.service";

@Injectable()
export class NightModeService 
{
    private nightModeSubject = new BehaviorSubject<boolean>(false);
    public nightModeSubjectObservable = this.nightModeSubject.asObservable(); 

    constructor(private cookieService: CookieService
        , private appConfigService: AppConfigService)
    {

    } 

    public setIsNightMode(isNightMode: boolean)
    {
      this.nightModeSubject.next(isNightMode);
    }
}