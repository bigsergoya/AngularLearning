import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainMenu } from './main-menu';
import { Footer } from './footer';
import { RouterModule } from '@angular/router';

import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChangeLocation } from './change-location';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    MainMenu,
    Footer,
    ChangeLocation
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule
  ],
  exports: [
    MainMenu,
    Footer
  ],
  providers: [],
bootstrap: []
})
export class MainComponentsModule { }
