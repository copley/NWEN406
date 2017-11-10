import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReqObj } from './ReqObj';
import { Defobj } from './defobj';
import { RESTService } from '../REST.service';

import { ResObj } from './ResObj';
interface ResponseObj { 
  task : [] 
  json : [] 
}
@Component({
  selector: 'app-chart-js',
  templateUrl: './chart-js.component.html',
  styleUrls: ['./chart-js.component.css'],
  encapsulation: ViewEncapsulation.None
})



export class ChartJsComponent implements OnInit {
  
  jsons = [] ;
  cdata = [] ;
  clables = [] ;
  ReqO=  Defobj;
  constructor(private http: HttpClient   ,     private restService: RESTService){
  };
    private reurl =   'http://35.163.140.165:5000/post'; 

  ngOnInit(): void {
        for (let i = 0; i <  parseInt(this.ReqO.times) ; i++)   {
              this.cdata.push(0) ;
               this.clables.push(0) ;
        }
  };
  

 
    // lineChart
  public lineChartData:Array<any> = [
    {data:  this.cdata, label: 'Series A'}
   // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
  //  {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
  public lineChartLabels:Array<any> = this.clables ;
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
 
  public post2() :void { 
          this.restService.restPost(this.ReqO).subscribe(
        res => {
             this.jsons = res.json ;     let _lineChartData:Array<any> = new Array(parseInt(this.ReqO.times));
                  _lineChartData[0] = {data: new Array(parseInt(this.ReqO.times)), label: this.lineChartData[0].label};
            for (let i = 0; i < parseInt(this.ReqO.times); i++) {
              
             _lineChartData[0].data[i] = this.jsons[i].durationSeconds  ;
             this.clables[i] = i  ; 
              
            }
                       this.lineChartData = _lineChartData;
                     //   this.lineChartLabels
          console.log(res);
        },
        err => {
          alert("apt key is wrong  ");
        }
      );;
    
  } 
  
  
  
  
    public post() :void { 
         this.http.post<ResponseObj>(this.reurl, 
        this.ReqO
    ).subscribe(
        res => {
             this.jsons = res.json ;     let _lineChartData:Array<any> = new Array(parseInt(this.ReqO.times));
                  _lineChartData[0] = {data: new Array(parseInt(this.ReqO.times)), label: this.lineChartData[0].label};
            for (let i = 0; i < parseInt(this.ReqO.times); i++) {
              
             _lineChartData[0].data[i] = this.jsons[i].durationSeconds  ;
             this.clables[i] = i  ; 
              
            }
                       this.lineChartData = _lineChartData;
                     //   this.lineChartLabels
          console.log(res);
        },
        err => {
          alert("apt key is wrong  ");
        }
      );;
    
  } 
  
  
  
  
 
  public post1():void {
     this.http.get<ResponseObj>('http://35.163.140.165:5000/getSatisfactory').subscribe(data => {
           this.jsons =   data.task[0]     ;   console.log( "this.json" )  ;  console.log( this.jsons )   ;
            let _lineChartData:Array<any> = new Array(this.lineChartData.length);
            for (let i = 0; i < this.lineChartData.length; i++) {
              _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
              for (let j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] =   this.jsons[j][0].durationSeconds;
              }
            }
               console.log (_lineChartData)
            this.lineChartData = _lineChartData;
         
            
            
            
    });
 
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
