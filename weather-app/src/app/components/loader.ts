import { Component, Input } from '@angular/core';
import { BaseNightModeComponent } from './base-nightmode-component';

@Component({
  selector: 'loader',
  templateUrl: './loader.html',
  styleUrls: ['./loader.scss']
})
export class LoaderComponent extends BaseNightModeComponent{
  @Input() isAbsolute: boolean; 
}
