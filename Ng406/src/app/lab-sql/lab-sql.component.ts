import { Component, OnInit,ViewChild } from '@angular/core';
import {RESTService} from '../REST.service';
import { ReqSqlObj} from './ReqSqlObj';
import { sqlobj} from './sqlobj';
import { nosqlObj} from './nosqlObj';
import {MatTableModule} from '@angular/material/table';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import 'codemirror/mode/sql/sql'
import {MatSnackBar} from '@angular/material';

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
  public sqlVersion = "" ;
  public resJSON = null ; 
  public selected = 'PostgreSQL';
  public nosqlOut = "" ;
  isPrcocessing : boolean  = false ;
  constructor(private restService :RESTService, public snackBar: MatSnackBar) {};
  

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
  
  public post () : void {
    switch(this.selected) {
    case "PostgreSQL":
        this.postToPostgreSQL() ;
        this.Req  = sqlobj ; 
        break;
    case "MongoDB":
        this.postToMongoDB(); 
        this.Req  = nosqlObj ; 
        break;
    default:
        this.postToPostgreSQL() ;
    } 
    
  }
  
  public triggerUpdate(e) : void {
    console.log (e.value);
    switch(e.value) {
    case "PostgreSQL":
        this.Req  = sqlobj ; 
        break;
    case "MongoDB":
        this.Req  = nosqlObj ; 
        break;
    default:
    }
  }
  
  
  public openSnackBar(msg) :void  {
    this.snackBar.open(msg, 'close', {
      duration: 60000,
    });
  }
  
  public postToPostgreSQL() :void {   
      this.isPrcocessing = true ;
    this.restService.restPost_postgresql(this.Req).subscribe(
    res => {
      this.resJSON = res ; 
      if (typeof this.resJSON == typeof "string" ) this.openSnackBar (this.resJSON.toString())  ;
      typeof this.resJSON.row == typeof "string" ? this.sqlVersion = this.resJSON.row.toString() : this.sqlVersion  ="" ;
       
      this.sqlOutput =[] ;  let sqlTables =  document.getElementById("sqlTables");
      if (document.getElementsByTagName("secetion")[0]!=null){
        document.getElementsByTagName("secetion")[0].remove();
      }
      let secetion = document.createElement("secetion");
      sqlTables.appendChild(secetion);
      
      for (let k= 0 ; k < this.resJSON.length ; k++){
        let table = document.createElement("table");
        table.setAttribute ("style", "border : 10px solid #123 ; margin:10px ;width :100%;")
        for (let i= 0 ; i < this.resJSON[k].length ; i++ ) //s
        {  
          
          let  row =    this.resJSON[k][i].row.split('|') ;
          let tr = document.createElement("TR");
           tr.setAttribute("style", "width:100%;");
          for (let j= 1 ; j < row.length ; j++ ) {
            let textnode = document.createTextNode(row[j]);
            let td = document.createElement("TD"); 
            td.setAttribute("style", "color: green; border: 4px solid #ddd ; margin :4px");
            td.appendChild(textnode);
            tr.appendChild(td);
          }
          i%2==0?  tr.style.backgroundColor = "#dac0c0":tr.style.backgroundColor = "#11c0c0" ;  
          table.appendChild(tr);
        }
        secetion.appendChild(table);
      }
          this.isPrcocessing = false ;
      
    },
    err => {
    alert("wrong apt key or other invalid input ");
    }
    );
  }
  
  
  public postToMongoDB() :void {   
    this.restService.restPost_mongo(this.Req).subscribe(
    res => {
      this.resJSON = res ; 
      this.nosqlOut = JSON.stringify(this.resJSON) ;
      
    },
    err => {
    alert("wrong apt key or other invalid input ");
    }
    );
  }

}



