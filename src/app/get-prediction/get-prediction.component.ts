import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, RequestResponse } from '../modules';

@Component({
  selector: 'app-get-prediction',
  templateUrl: './get-prediction.component.html',
  styleUrls: ['./get-prediction.component.css']
})
export class GetPredictionComponent implements OnInit {

  public user:User = new User();

  constructor(private http:HttpClient) { 
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
