import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { Iuser } from '../../models/iuser';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup = new FormGroup({
    fullName: new FormControl("", [Validators.required, Validators.minLength(1)]),
    dni: new FormControl("", [Validators.required, Validators.minLength(1)]),
    birthday: new FormControl("", [Validators.required, Validators.minLength(1)]),
    email: new FormControl("", [Validators.required, Validators.minLength(1)]),
    github: new FormControl("", [Validators.required, Validators.minLength(1)]),
  });
  users: Iuser[] = [];
  completedFormFields: boolean = false;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  validateInputFileds() {
    let datos = Object.values(this.userForm.value).some(item => item === "" ? true : false);
    this.completedFormFields = datos;
    return datos
  }

  createUser() {
    if (!this.validateInputFileds()) {

      this.validateInputFileds()
      this.deleteCoockies()
      this.users.push(this.userForm.value)
      let expires = new Date();
      expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
      document.cookie = `name=${this.userForm.value.fullName}; expires=${expires}; path=/`;
      document.cookie = `dni=${this.userForm.value.dni}; expires=${expires}; path=/`;
      document.cookie = `birthday=${this.userForm.value.birthday}; expires=${expires}; path=/`;
      document.cookie = `email=${this.userForm.value.email}; expires=${expires}; path=/`;
      document.cookie = `github=${this.userForm.value.github}; expires=${expires}; path=/`;
      this.userService.setUserCookies(true);
      M.toast({ html: '☝ User Created !!' })
    }
  }

  deleteCoockies() {
    document.cookie = "name= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "dni= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "birthday= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "email= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "github= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
  }

}
