import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { ChartJsComponent }   from './chart-js/chart-js.component';
import { LabSqlComponent }      from './lab-sql/lab-sql.component';
import { HomeComponent }      from './home/home.component';
import { AuthenticationComponent }      from './authentication/authentication.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:  HomeComponent },
  { path: 'singup', component:  AuthenticationComponent },
  { path: 'chartjs', component: ChartJsComponent },
  { path: 'labsql', component: LabSqlComponent },
  { path: 'auth', component: AuthenticationComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}