import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import {
    HttpClient
} from '@angular/common/http';
import {
    ReqObj
} from './ReqObj';
import {
    Defobj
} from './defobj';


import {
    ResObj
} from './ResObj';
interface ResponseObj {
    task: []
    json: []
}
@Component({
    selector: 'app-chart-js',
    templateUrl: './chart-js.component.html',
    styleUrls: ['./chart-js.component.css'],
    encapsulation: ViewEncapsulation.None
})



export class ChartJsComponent implements OnInit {

    public jsons = [];
    public cdata = [];
    public clables = [];
    public costs = [];
    public ReqO = Defobj;
    public lineChartData: Array < any > = [];
    public lineChartLabels: Array < any > = [];
    public lineChartOptions = {
        responsive: true
    };
    public lineChartColors: Array < any >= [];

    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';


    constructor(private http: HttpClient) {};
    private reurl = 'http://35.163.140.165:5000/post';

    ngOnInit(): void {

        for (let i = 0; i < parseInt(this.ReqO.times); i++) {
            this.cdata.push(0);
            this.clables.push(0);
            this.costs.push(0);
        };

        this.chartjs();
    };



    public chartjs(): void {

        // lineChart
        this.lineChartData = [{
                data: this.cdata,
                label: 'duration time  '
            },
            {
                data: this.costs,
                label: 'cost line per  0.00000001 $'
            }
            //  {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
        ];
        this.lineChartLabels = this.clables;

        this.lineChartColors = [{ // grey
                backgroundColor: 'rgba(48,159,177,0.2)',
                borderColor: 'rgba(48,159,177,1)',
                pointBackgroundColor: 'rgba(48,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(48,159,177,0.8)'
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


    }




    public getprice(mb, t): number {

        let prices = [0.000000208, 0.000000417, 0.000000834, 0.000001667];
        let price = 0;
        switch (mb) {
            case 128:
                price = prices[0];
                break;
            case 256:
                price = prices[1];
                break;
            case 512:
                price = prices[2];
                break;
            case 1024:
                price = prices[3];
                break;
        }

        return price * t * 10000000;

    }

    public initaxis(): void {
        this.cdata = [];
        this.clables = [];
        this.costs = [];
        for (let i = 0; i < parseInt(this.ReqO.times); i++) {
            this.cdata.push(0);
            this.clables.push(0);
            this.costs.push(0);
        }

    }



    public post(): void {   this.chartjs();
        this.http.post < ResponseObj > (this.reurl,
            this.ReqO
        ).subscribe(
            res => {
                debugger;
              
                this.jsons = res.json;
                let t= parseInt(this.ReqO.times) ; 
                let _lineChartData: Array < any > = new Array(t);
             //   this.clables = [] ;  this.cdata  = [] ; this.costs = [] ;
                let  diff = this.clables.length - t ; 
                this.clables.splice( t, diff)  ;
                for (let j = 0; j < 2; j++) {
                    _lineChartData[j] = {
                        data: new Array(parseInt(this.ReqO.times)),
                        label: this.lineChartData[j].label
                    };
                    for (let i = 0; i < parseInt(this.ReqO.times); i++) {

                        _lineChartData[j].data[i] = this.jsons[i].durationSeconds;
                        if (j == 1) _lineChartData[j].data[i] = this.getprice(this.jsons[i].MB, this.jsons[i].durationSeconds);
                        this.clables[i] = i + '.';

                    }
                }
                this.lineChartData = _lineChartData;

                //   this.lineChartLabels
                console.log(res);
            },
            err => {
                alert("wrong apt key or other invalid input.......  ");
            }
        );;
        // this.initaxis() ;
    }
    /**
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
          alert("wrong apt key or other invalid input F ");
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
           // this.lineChartData = _lineChartData;
         
            
            
            
    });
 
  }
  
  **/

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
}