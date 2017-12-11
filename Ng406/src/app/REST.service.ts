import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { ReqObj } from './chart-js/ReqObj';
import { ReqSqlObj } from './lab-sql/ReqSqlObj';
import {registerReqObj} from './authentication/registerReqObj';
import {Router} from '@angular/router' ;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



interface RegisterObj {
  email: string;
  password : string ; 
}



interface ResponseObj {
  MB: number;
  durationSeconds: number;
  loops: number;
  max : number;
}


interface sqlResponObj {
  row: string;
}

interface loginResponObj {
  message : string ; 
}


@Injectable()
export class RESTService  {

  private mongooseAPI = 'http://52.64.15.213:3000/mongoose';
  private mongodbAPI =  'http://52.64.15.213:3000/api/mongodb';
  private reurl =   'http://52.64.15.213:1114/post';  //   URL to web api
  private sqlURL  = "http://52.64.15.213:8000/api/todo/PostToFlask" ;
  private registerAPI = 'http://52.64.15.213:3000/register';
  private loginAPI = 'http://52.64.15.213:3000/login';
  results: string[];
  constructor(private http: HttpClient ,private router :Router) { }
    
 
  register (req : registerReqObj)  {
    return  this.http.post<RegisterObj[]>(this.registerAPI, 
        req
    ) .pipe(     
        tap(l => this.log(`register api call success`)),
        catchError(this.handleError('post', []))
      ) ; 
  }
  
  login (req : registerReqObj)  {
    return  this.http.post<loginResponObj>(this.loginAPI, 
        req
    ) .pipe(     
        tap(l => this.log(`register api call success`)),
        catchError(this.handleError('post', []))
      ) ; 
  }

//  ** GET performance from the server 
  restPost (req : ReqObj): Observable<ResponseObj[]> { debugger ;
  
   return  this.http.post<ResponseObj[]>(this.reurl, 
        req
    ) .pipe(     
        tap(l => this.log(`fetched l`)),
        catchError(this.handleError('post', []))
      ) ;  
    
  }
  
  restPost_sql (req : ReqSqlObj): Observable<sqlResponObj[]> { debugger ;
  
   return  this.http.post<sqlResponObj[]>(this.mongooseAPI, 
        req
    ) .pipe(     
        tap(l => this.log(`fetched l`)),
        catchError(this.handleError('post', []))
      ) ;  
    
  }
  
  
  
  restPostToDotNet (req : ReqSqlObj): Observable<sqlResponObj[]> { debugger ;
  
   return  this.http.post<sqlResponObj[]>(this.sqlURL, 
        req
    ) .pipe(     
        tap(l => this.log(`fetched l`)),
        catchError(this.handleError('post', []))
      ) ;  
    
  }
  
  
   authenticate(res) {
        var authResponse = res;

        if (!authResponse.token)
            return;

        localStorage.setItem(this.TOKEN_KEY, authResponse.token)
        localStorage.setItem(this.NAME_KEY, authResponse.firstName)
        this.router.navigate(['/']);
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