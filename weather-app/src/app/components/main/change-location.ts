import { Component, EventEmitter, Input, Output, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'change-location',
  templateUrl: './change-location.html',
  styleUrls: ['./change-location.scss']
})
export class ChangeLocation {
  constructor( public dialogRef: MatDialogRef<ChangeLocation>,
    @Inject(MAT_DIALOG_DATA) public data: string)
  {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
