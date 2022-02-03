import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NightModeService } from '../services/night-mode.service';

@Component({
  selector: 'simple-pagination',
  template: ''
})
export class BaseNightModeComponent {
    isNightMode: boolean = false;
    nightModeClass: string = "";
    angularMaterialNightModeClass: string = "";
    nightModeSubscription: any;

    public readonly timeFormat: string = "h:mm a"
    public readonly timeFormatUpper: string = "h:mm A"
    public readonly dateFullFormat = "MMMM Do, h:mm a"
    public readonly dateShortFormat = "MMMM Do";

    constructor(protected nightModeService: NightModeService)
    {
    }
  
    ngOnInit()
    {
      this.nightModeSubscription = this.nightModeService.nightModeSubjectObservable
        .subscribe(isNightMode => this.handleNightMode(isNightMode));
    }
  
    handleNightMode(isNightMode: boolean): void {
      this.isNightMode = isNightMode;
      this.nightModeClass = isNightMode ? "nightMode" : "";
      this.angularMaterialNightModeClass = isNightMode ? "angular-material-dark-theme": "";
    }

    setIsNightMode(isNightMode: boolean)
    {
      this.nightModeService.setIsNightMode(isNightMode);
    }
    
    ngOnDestroy() {
      this.nightModeSubscription.unsubscribe();
    }
}