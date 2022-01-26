import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainMenu } from './main-menu';
import { AppFooter } from './app-footer';
import { RouterModule } from '@angular/router';

import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChangeLocation } from './change-location';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MomentPipe } from '../moment-pipe';
import { ComponentsBaseModule } from '../components.base.module';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MobileMenu } from './mobile-menu';

@NgModule({
  declarations: [
    MainMenu,
    AppFooter,
    ChangeLocation,
    MobileMenu
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule, 
    ComponentsBaseModule,
    MatIconModule,
    MatSidenavModule
  ],
  exports: [
    MainMenu,
    AppFooter,
    MobileMenu
  ],
  providers: [],
bootstrap: []
})
export class MainComponentsModule { }
