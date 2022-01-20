import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ChangeLocation } from './change-location';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.html',
  styleUrls: ['./main-menu.scss'],
  providers: []
})
export class MainMenu {
  @Input() locationQuery: string;
  @Output() locationQueryChange = new EventEmitter<string>();
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ChangeLocation, {
      width: '250px',
      data: this.locationQuery,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result)
      {
        this.locationQuery = result;
        this.locationQueryChange.emit(result);
      }
    });
  }
}
