import { Component, OnInit } from '@angular/core';
import {RESTService} from '../REST.service';
import {
    ReqSqlObj
} from './ReqSqlObj';
import {
    sqlobj
} from './sqlobj';

interface sqlResponObj {
  row: string;
}


@Component({
  selector: 'app-lab-sql',
  templateUrl: './lab-sql.component.html',
  styleUrls: ['./lab-sql.component.css']
})
export class LabSqlComponent implements OnInit {
  public Req = sqlobj;
  public sqlOutput : string ="" ;
  constructor(private restService :RESTService) {};

  ngOnInit() {
  }
  
  public post() :void {   
  
      this.restService.restPost_sql(this.Req).subscribe(
          res => {
         
            for (let i= 0 ; i < res.length ; i++ )
              this.sqlOutput += res[i].row.toString() ;debugger ;
         
          },
          err => {
          alert("wrong apt key or other invalid input ");
          }
      );
    }

}
