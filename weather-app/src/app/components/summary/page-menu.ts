import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Slider } from '../slider/slider';
import { SliderMode } from '../slider/slider-mode';

@Component({
  selector: 'page-menu',
  templateUrl: './page-menu.html',
  styleUrls: ['./page-menu.scss']
})
export class PageMenu {
  SliderMode = SliderMode;
  
  @Input() mode: SliderMode;
  @Output() modeChange = new EventEmitter<SliderMode>();

  onButtonClick(mode: SliderMode){        
    this.mode = mode;
    this.modeChange.emit(mode);
  }
}