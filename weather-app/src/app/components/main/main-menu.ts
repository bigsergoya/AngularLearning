import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CookieService } from 'src/app/services/cookie.service';
import { LocationDto } from 'src/app/services/dto/location';
import { ChangeLocation } from './change-location';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.html',
  styleUrls: ['./main-menu.scss'],
  providers: [CookieService]
})
export class MainMenu {
  @Input() locationQuery: string;
  @Output() locationQueryChange = new EventEmitter<string>();
  constructor(public dialog: MatDialog, private cookieService: CookieService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ChangeLocation, {
      width: '250px',
      data: this.locationQuery,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.locationQuery = result;
      this.locationQueryChange.emit(result);

      this.cookieService.setCookie(result, 30);
    });
  }
}
