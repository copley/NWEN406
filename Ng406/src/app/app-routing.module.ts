import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { ChartJsComponent }   from './chart-js/chart-js.component';
import { LabSqlComponent }      from './lab-sql/lab-sql.component';
const routes: Routes = [
  { path: '', redirectTo: '/chartjs', pathMatch: 'full' },
  { path: 'chartjs', component: ChartJsComponent },
  { path: 'labsql', component: LabSqlComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}