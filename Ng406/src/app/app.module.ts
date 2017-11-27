import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChartJsComponent } from './chart-js/chart-js.component';
import { RESTService } from './REST.service';
import { AppRoutingModule }     from './app-routing.module';
import { LabSqlComponent } from './lab-sql/lab-sql.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartJsComponent,
    LabSqlComponent
  ],
  imports: [
    BrowserModule,
     ChartsModule,
     HttpClientModule,
      FormsModule,
      AppRoutingModule
  ],
  providers: [RESTService],
  bootstrap: [AppComponent]
})
export class AppModule { }
