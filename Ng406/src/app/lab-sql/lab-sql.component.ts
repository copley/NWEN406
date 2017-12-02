import { Component, OnInit,ViewChild } from '@angular/core';
import {RESTService} from '../REST.service';
import { ReqSqlObj} from './ReqSqlObj';
import { sqlobj} from './sqlobj';
import {MatTableModule} from '@angular/material/table';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import 'codemirror/mode/sql/sql'
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
  public config = { lineNumbers: true, mode: 'text/x-sql' };
  public sqlError = "" ;
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
      typeof res == typeof "string" ? this.sqlError = res.toString() : this.sqlError  ="" 
      this.sqlOutput =[] ;  let sqlTables =  document.getElementById("sqlTables");
      if (document.getElementsByTagName("secetion")[0]!=null){
        document.getElementsByTagName("secetion")[0].remove();
      }
      let secetion = document.createElement("secetion");
      sqlTables.appendChild(secetion);
      
      for (let k= 0 ; k < res.length ; k++){
        let table = document.createElement("table");
        
        for (let i= 0 ; i < res[k].length ; i++ )
        {  
          
          let  row =    res[k][i].row.split('|') ;
          let tr = document.createElement("TR");
          for (let j= 1 ; j < row.length ; j++ ) {
            let textnode = document.createTextNode(row[j]);
            let td = document.createElement("TD"); 
            td.setAttribute("style", "color: green; border: 4px solid #ddd ; margin :4px;");
            td.appendChild(textnode);
            tr.appendChild(td);
          }
          i%2==0?  tr.style.backgroundColor = "#dac0c0":tr.style.backgroundColor = "#11c0c0" ;  
          table.appendChild(tr);
        }
        secetion.appendChild(table);
      }
      
    },
    err => {
    alert("wrong apt key or other invalid input ");
    }
    );
  }

}





