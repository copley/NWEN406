import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { ReqObj } from './chart-js/ReqObj';
import { ReqSqlObj } from './lab-sql/ReqSqlObj';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};







interface ResponseObj {
  MB: number;
  durationSeconds: number;
  loops: number;
  max : number;
}


interface sqlResponObj {
  row: string;
}


@Injectable()
export class RESTService  {

  private reurl =   'http://35.163.140.165:1114/post';  //   URL to web api
  private sqlURL  = "http://35.163.140.165:8000/api/todo/PostToFlask" ;
  results: string[];
  constructor(private http: HttpClient) { }
    
 

//  ** GET performance from the server 
  restPost (req : ReqObj): Observable<ResponseObj[]> { 
  
   return  this.http.post<ResponseObj[]>(this.reurl, 
        req
    ) .pipe(     
        tap(l => this.log(`fetched l`)),
        catchError(this.handleError('post', []))
      ) ;  
    
  }
  
  restPost_sql (req : ReqSqlObj): Observable<sqlResponObj[]> { 
  
   return  this.http.post<sqlResponObj[]>(this.sqlURL, 
        req
    ) .pipe(     
        tap(l => this.log(`fetched l`)),
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
  }


}