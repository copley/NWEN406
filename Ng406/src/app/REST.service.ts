import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { ResObj } from './chart-js/ResObj';


import { ReqObj } from './chart-js/ReqObj';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

interface ResponseObj { 
  task : [] 
  json : [] 
}

@Injectable()
export class RESTService  {

  private reurl =   'http://35.163.140.165:5000/post';  // URL to web api
   results: string[];
  constructor(
    private http: HttpClient) { }
    
 

  /** GET performance from the server 
  restPost (req : ReqObj): Observable<ResponseObj> { 
  
   return  this.http.post<ResponseObj>(this.reurl, 
        req
    ) .pipe(     
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('post', []))
      ) ;  
    
  }
  private log(message: string) {
    console.log('Rest service: ' + message);
  }
  
  
    private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }*/


}