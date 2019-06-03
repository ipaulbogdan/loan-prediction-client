import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, RequestResponse } from '../modules';

@Component({
  selector: 'app-get-prediction',
  templateUrl: './get-prediction.component.html',
  styleUrls: ['./get-prediction.component.css']
})
export class GetPredictionComponent implements OnInit {

  private loaded_Data:boolean;
  private user:User;

  constructor(private http:HttpClient) { 
    this.user = new User();
    this.loaded_Data =false;
    this.user.gender='Female',
    this.user.married='No',
    this.user.dependends=5,
    this.user.education='Graduate',
    this.user.self_employed='Yes',
    this.user.income=3000,
    this.user.coIncome=0,
    this.user.loanAmount=100,
    this.user.loanTerm=1000,
    this.user.creditHistory=1,
    this.user.area='Urban'

  }

  ngOnInit() {
  }
  
  get_prediction(){
    console.log(this.user);
    this.http.post('http://localhost:8080/predict',this.user).subscribe((res : RequestResponse)=>{
      console.log(res);
    });
  }


}
