import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/@common/services/user.service';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.scss']
})
export class RegistrationComponentComponent implements OnInit {

  _form: FormGroup;

  alert: boolean = false;
  message: string = "Loading...";

  constructor(
    private _formBuilder: FormBuilder,
    private userService: UserService,
  ) { }

  ngOnInit(): void {

    let formFields = {
      user_name: ['', Validators.required],
      password: ['', Validators.required]
    };

    this._form = this._formBuilder.group(formFields);
  }

  register() {

    this.userService.signUp(this._form.getRawValue()).subscribe(
      (res) => {
        this.success("Registration complete");
      },
      (err) => {
        this.error();
      });
  }

  reset() {

    setTimeout(() => {

      this.message = this.message;
    }, 2000);
  }

  error() {
    this.message = "Something wen't wrong";
    this.reset();
  }

  success(msg: string) {
    this.message = msg;
    this.reset();
  }
}
