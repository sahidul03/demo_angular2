import {Component, OnInit} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthServices } from '../../services/auth.service';


@Component({
    moduleId: module.id,
    selector: 'signin',
    templateUrl: 'signin.component.html',
    providers: [ AuthServices ]
})
export class SigninComponent implements OnInit {
    myForm: FormGroup;
    error = false;
    errorMessage = '';
    email: string;
    password: string;

    constructor(private _AuthServices: AuthServices) {
        this.email = '';
        this.password = '';
    }

    onSignin() {
        var loginInfo = { email: this.email, password: this.password };
        this._AuthServices.login(loginInfo).subscribe(res => {
            console.log(res);

        })
    }

    ngOnInit():any {
        //this.myForm = this.fb.group({
        //    email: ['', Validators.required],
        //    password: ['', Validators.required],
        //});
    }
}
