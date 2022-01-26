import { Component, EventEmitter, Input, Output, Inject, HostListener } from '@angular/core';
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

  @HostListener('window:keyup.Enter', ['$event'])
  onDialogClick(event: KeyboardEvent): void {
    this.dialogRef.close(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
