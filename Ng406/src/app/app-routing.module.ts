import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { ChartJsComponent }   from './chart-js/chart-js.component';
import { LabSqlComponent }      from './lab-sql/lab-sql.component';
import { AuthenticationComponent }      from './authentication/authentication.component';
const routes: Routes = [
  { path: '', redirectTo: '/chartjs', pathMatch: 'full' },
  { path: 'chartjs', component: ChartJsComponent },
  { path: 'labsql', component: LabSqlComponent },
  { path: 'auth', component: AuthenticationComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}