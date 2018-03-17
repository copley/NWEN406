import { Component, OnInit } from '@angular/core';
import { RESTService} from '../REST.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private restService :RESTService) { }

  ngOnInit() {
  }
  
  public loginObj = {
    email: "",
    password: ""
  }
  
  login() {
    this.restService.login(this.loginObj).subscribe(
    res => { debugger ;
    this.restService.authenticate(res);
    console.log(res);
      if(!res) return ;

    },
    err => {
    alert("wrong apt key or other invalid input ");
    }
    );  
  }

}
