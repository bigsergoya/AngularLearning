import { Injectable } from '@angular/core';
import { AppConfigService } from './configuration.service';

@Injectable()
export class CookieService {
  private defaultCookieName: string;
  constructor(private appConfigService: AppConfigService) { }

  public getCookie(name: string = this.appConfigService.locationCookieName) {
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) == 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }

  public deleteCookie(name: string) {
    this.setCookie("", -1, name);
  }

  public setCookie(value: string, expireDays: number, name: string = this.appConfigService.locationCookieName, path: string = "") {
    let d: Date = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    let expires: string = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + (path.length > 0 ? "; path=" + path : "");
  }
}