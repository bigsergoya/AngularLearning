import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainMenu } from './main-menu';
import { Footer } from './footer';

@NgModule({
  declarations: [
    MainMenu,
    Footer
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    MainMenu,
    Footer
  ],
  providers: [],
bootstrap: []
})
export class MainComponentsModule { }
