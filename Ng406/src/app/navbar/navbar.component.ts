import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get UserName (){
    return localStorage.getItem('user') ; 
  }  
  
  get isAuth (){
    return !!localStorage.getItem('token');
  }
  
  logOut (){
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
}
