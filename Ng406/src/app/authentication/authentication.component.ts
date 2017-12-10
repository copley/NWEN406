import { Component, OnInit, Inject } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RESTService} from '../REST.service';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

    public  form: FormGroup;
  
  constructor(@Inject(FormBuilder) fb: FormBuilder , private restService :RESTService) {
    this.form =fb.group(
      {
        email : ['',[Validators.required ,checkEmail()]],
        password:['',Validators.required],
        confirmPassword : ['',Validators.required]
      },
      {validator :  confirmPassword ('password','confirmPassword')}
    )
  }

    ngOnInit() {
    }
    
    onSubmit (){
       delete this.form.value.confirmPassword;
       console.log (this.form.value) ;
       this.restService.register(this.form.value).subscribe(
    res => { debugger ;
      this.resJSON = res ; 
      console.log(JSON.stringify(this.resJSON)) ;
      
    },
    err => {
    alert("wrong apt key or other invalid input ");
    }
    );
    }
    
    isValid (control){
      return this.form.controls[control].invalid && this.form.controls[control].touched ; 
    }
    
    isValidForm (){ 
      return this.isValid('email')||this.isValid('password')||this.isValid('confirmPassword')//confirmPassword('password','confirmPassword')//||!checkEmail();
    }

}

function confirmPassword(pw, cpw) {
  return form => {
    if (form.controls[pw].value!=form.controls[cpw].value)
      return {confirmPassword : true} 
  }
}

function checkEmail () {
  return control => {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return  regex.test(control.value) ? null : {invalidEmail : true}
  }
}
