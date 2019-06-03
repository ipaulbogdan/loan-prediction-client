import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule,Routes} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetPredictionComponent } from './get-prediction/get-prediction.component';

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
