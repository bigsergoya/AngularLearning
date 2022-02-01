import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NightModeService } from '../services/night-mode.service';

@Component({
  selector: 'simple-pagination',
  template: ''
})
export class BaseNightModeComponent {
    isNightMode: boolean = false;
    nightModeSubscription: any;

    public readonly timeFormat: string = "h:mm a"
    public readonly timeFormatUpper: string = "h:mm A"
    public readonly dateFullFormat = "MMMM Do, h:mm a"
    public readonly dateShortFormat = "MMMM Do";

    constructor(
        protected nightModeService: NightModeService)
        {
        }
    
      ngOnInit()
      {
        this.nightModeSubscription = this.nightModeService.nightModeSubjectObservable
          .subscribe(isNightMode => this.handleNightMode(isNightMode));
      }
    
      handleNightMode(isNightMode: boolean): void {
        this.isNightMode = isNightMode;
      }
    
      ngOnDestroy() {
        this.nightModeSubscription.unsubscribe();
      }
}