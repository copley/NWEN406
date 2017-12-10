"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var AuthenticationComponent = (function () {
    function AuthenticationComponent(fb) {
        this.form = fb.group({
            email: ['', [forms_1.Validators.required, checkEmail()]],
            password: ['', forms_1.Validators.required],
            confirmPassword: ['', forms_1.Validators.required]
        }, { validator: confirmPassword('password', 'confirmPassword') });
    }
    AuthenticationComponent.prototype.ngOnInit = function () {
    };
    AuthenticationComponent.prototype.onSubmit = function () {
        console.log(this.form.value);
    };
    AuthenticationComponent.prototype.isValid = function (control) {
        console.log(this.form.controls[control].invalid && this.form.controls[control].touched);
        return this.form.controls[control].invalid && this.form.controls[control].touched;
    };
    AuthenticationComponent.prototype.isValidForm = function () {
        return this.isValid('email') && this.isValid('password') && this.isValid('confirmPassword') && confirmPassword('password', 'confirmPassword') &&
        ;
    };
    AuthenticationComponent = __decorate([
        core_1.Component({
            selector: 'app-authentication',
            templateUrl: './authentication.component.html',
            styleUrls: ['./authentication.component.css']
        }),
        __param(0, core_1.Inject(forms_1.FormBuilder))
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());
exports.AuthenticationComponent = AuthenticationComponent;
function confirmPassword(pw, cpw) {
    return function (form) {
        if (form.controls[pw].value != form.controls[cpw].value)
            return { confirmPassword: true };
    };
}
function checkEmail() {
    return function (control) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(control.value) ? null : { invalidEmail: true };
    };
}
