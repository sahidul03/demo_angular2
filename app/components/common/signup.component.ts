import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { AuthServices } from '../../services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'signup',
    templateUrl: 'signup.component.html',
    providers: [ AuthServices ]
})
export class SignupComponent implements OnInit {
    myForm: FormGroup;
    error = false;
    errorMessage = '';
    email: string;
    password: string;
    password_confirmation: string;

  constructor(private _AuthServices: AuthServices) {
    this.email = '';
    this.password = '';
    this.password_confirmation = '';
  }

    onSignup() {
      var signupInfo = {
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      };
      this._AuthServices.signUp(signupInfo).subscribe(res => {
        console.log(res);

      })
    }

    ngOnInit(): any {
        //this.myForm = this.fb.group({
        //    email: ['', Validators.compose([
        //        Validators.required,
        //        this.isEmail
        //    ])],
        //    password: ['', Validators.required],
        //    confirmPassword: ['', Validators.compose([
        //        Validators.required,
        //        this.isEqualPassword.bind(this)
        //    ])],
        //});
    }

    //isEmail(control: FormControl): {[s: string]: boolean} {
    //    if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
    //        return {noEmail: true};
    //    }
    //}
    //
    //isEqualPassword(control: FormControl): {[s: string]: boolean} {
    //    if (!this.myForm) {
    //        return {passwordsNotMatch: true};
    //
    //    }
    //    if (control.value !== this.myForm.controls['password'].value) {
    //        return {passwordsNotMatch: true};
    //    }
    //}
}
