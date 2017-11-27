import { Component, OnInit,ViewChild } from '@angular/core';
import {RESTService} from '../REST.service';
import { ReqSqlObj} from './ReqSqlObj';
import { sqlobj} from './sqlobj';
import {MatTableModule} from '@angular/material/table';
import {MatPaginator, MatTableDataSource} from '@angular/material';

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
  public sqlOutput :   Array < sqlResponObj >    ;   
  constructor(private restService :RESTService) {};

  ngOnInit() {  // none
  }
  
  
  public displayedColumns = ['position'];
  public dataSource = null ; //new MatTableDataSource<sqlResponObj>(this.sqlOutput);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
   // this.dataSource.paginator = this.paginator;
  }
  
  public postSqlScript() :void {   
    this.restService.restPost_sql(this.Req).subscribe(
    res => {
      this.sqlOutput =[] ;  let ngt =  document.getElementById("ngt");
      for (let i= 0 ; i < res.length ; i++ )
      {  
        this.sqlOutput.push(res[i]) ;
        let  row =    res[i].row.split('|') ;
        let tr = document.createElement("TR");
        for (let j= 0 ; j < row.length ; j++ ) {
          let textnode = document.createTextNode(row[j]);
          let td = document.createElement("TD"); 
          td.setAttribute("style", "color: green; border: 4px solid #ddd ; margin :4px;");
          td.appendChild(textnode);
          tr.appendChild(td);
        }
        if (i%2==0)  tr.style.backgroundColor = "#dac0c0"; else  tr.style.backgroundColor = "#11c0c0" ;  
        ngt.appendChild(tr);
      }
    },
    err => {
    alert("wrong apt key or other invalid input ");
    }
    );
  }

}





