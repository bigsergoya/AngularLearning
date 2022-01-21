import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MomentPipe } from './moment-pipe';


@NgModule({
  declarations: [
    MomentPipe
  ],
  imports: [
  ],
  exports:[
    MomentPipe
  ],
  providers: [],
bootstrap: []
})
export class ComponentsBaseModule { }