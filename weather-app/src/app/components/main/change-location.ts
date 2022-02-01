import { Component, EventEmitter, Input, Output, Inject, HostListener } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { NightModeService } from 'src/app/services/night-mode.service';
import { BaseNightModeComponent } from '../base-nightmode-component';

@Component({
  selector: 'change-location',
  templateUrl: './change-location.html',
  styleUrls: ['./change-location.scss']
})
export class ChangeLocation extends BaseNightModeComponent{
  constructor( public dialogRef: MatDialogRef<ChangeLocation>,
    nightModeService: NightModeService,
    @Inject(MAT_DIALOG_DATA) public data: string)
  {
    super(nightModeService);
  }

  @HostListener('window:keyup.Enter', ['$event'])
  onDialogClick(event: KeyboardEvent): void {
    this.dialogRef.close(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
