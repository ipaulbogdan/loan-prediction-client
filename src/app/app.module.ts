import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule,Routes} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetPredictionComponent } from './get-prediction/get-prediction.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule,MatInputModule, MatSelectModule, MatCardModule,MatProgressSpinnerModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



const appRoutes: Routes=[
  {path:'predict', component: GetPredictionComponent},
  {path:'', redirectTo: 'predict',pathMatch:'full'}
]



@NgModule({
  declarations: [
    AppComponent,
    GetPredictionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
