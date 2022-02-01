import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NightModeService } from 'src/app/services/night-mode.service';
import { BaseNightModeComponent } from '../base-nightmode-component';
import { ChangeLocation } from './change-location';

@Component({
  selector: 'mobile-menu',
  templateUrl: './mobile-menu.html',
  styleUrls: ['./mobile-menu.scss'],
  providers: []
})
export class MobileMenu extends BaseNightModeComponent {
  @Input() locationQuery: string;
  @Output() locationQueryChange = new EventEmitter<string>();
  constructor(public dialog: MatDialog, nightModeService: NightModeService) 
  {
    super(nightModeService);
  }

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
