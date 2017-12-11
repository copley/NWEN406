import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule ,FormBuilder , ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ChartJsComponent } from './chart-js/chart-js.component';
import { RESTService } from './REST.service';
import { AppRoutingModule }     from './app-routing.module';
import { LabSqlComponent } from './lab-sql/lab-sql.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CodemirrorModule } from 'ng2-codemirror';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import { AuthenticationComponent } from './authentication/authentication.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


@NgModule({
    exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  declarations: [
    AppComponent,
    ChartJsComponent,
    LabSqlComponent,
    AuthenticationComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CodemirrorModule,
    BrowserModule,
     ChartsModule,
     HttpClientModule,
      FormsModule,
      AppRoutingModule,
         CdkTableModule,
         MatTableModule,
    MatNativeDateModule,
    MatPaginatorModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatCardModule,
      MatSelectModule,
      MatSnackBarModule,
      MatToolbarModule,
      ReactiveFormsModule,MatInputModule
  ],
  providers: [RESTService,FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
