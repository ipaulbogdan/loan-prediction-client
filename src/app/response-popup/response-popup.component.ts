import { Component, Inject } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog'
import { RequestResponse } from '../modules';

@Component({
  selector: 'app-response-popup',
  templateUrl: './response-popup.component.html',
  styleUrls: ['./response-popup.component.css']
})
export class ResponsePopupComponent {

  constructor(
    public dialogRef: MatDialogRef<ResponsePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RequestResponse) {}


  onOkClick(): void {
    this.dialogRef.close();
  }
}
