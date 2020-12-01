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
  // name: FormControl = new FormControl("", Validators.required);
  // email: FormControl = new FormControl("", Validators.required);
  userForm: FormGroup = new FormGroup({
    fullName: new FormControl("", Validators.required),
    dni: new FormControl("", [Validators.required, Validators.email]),
    birthday: new FormControl("", [Validators.required, Validators.email]),
    email: new FormControl("", [Validators.required, Validators.email]),
    github: new FormControl("", [Validators.required, Validators.email]),
  });
  users: Iuser[] = []
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    //this.getUsers();
  }

  // getUsers() {
  //   this.userService.getUsers().subscribe((users: Iuser[]) => {
  //     this.users = users;
  //     console.log(this.users);

  //   })
  // }

  editUser(userID: number) {
    this.userForm.setValue({
      name: this.users[userID].name,
      email: this.users[userID].email

    });
  }

  createUser() {
    this.deleteCoockies()
    this.users.push(this.userForm.value)
    console.log(this.users);
    let expires = new Date();
    expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
    document.cookie = `name=${this.userForm.value.fullName}; expires=${expires}; path=/`;
    document.cookie = `dni=${this.userForm.value.dni}; expires=${expires}; path=/`;
    document.cookie = `birthday=${this.userForm.value.birthday}; expires=${expires}; path=/`;
    document.cookie = `email=${this.userForm.value.email}; expires=${expires}; path=/`;
    document.cookie = `github=${this.userForm.value.github}; expires=${expires}; path=/`;
    this.userService.setUserCookies(true);

  }

  deleteCoockies() {
    document.cookie = "name= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "dni= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "birthday= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "email= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "github= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
  }

}
