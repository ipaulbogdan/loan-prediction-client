import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, RequestResponse } from '../modules';
import { MatDialog } from '@angular/material';
import { ResponsePopupComponent } from '../response-popup/response-popup.component';

@Component({
  selector: 'app-get-prediction',
  templateUrl: './get-prediction.component.html',
  styleUrls: ['./get-prediction.component.css']
})
export class GetPredictionComponent implements OnInit {

  public user:User = new User();

  constructor(private http:HttpClient,private dialog:MatDialog) { 
  }

  ngOnInit() {
  }
  
  get_prediction(){
    console.log(this.user);
    this.http.post('http://localhost:8080/api/loan/predict',this.user).subscribe(
      (res : RequestResponse)=>{
        console.log(res);
        this.openDialog(res);  
      },err =>{
        console.error(`Error sending request: ${err}`);
      });
  }

  openDialog(res): void {
    const dialogRef = this.dialog.open(ResponsePopupComponent, {
        data:res
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
          });
  }


  
}
