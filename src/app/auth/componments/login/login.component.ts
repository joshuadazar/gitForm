import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { Iuser } from '../../models/iuser';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // name: FormControl = new FormControl("", Validators.required);
  // email: FormControl = new FormControl("", Validators.required);
  userForm: FormGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email])
  });
  users: Iuser[] = []
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.authService.getUsers().subscribe((users: Iuser[]) => {
      this.users = users;
      console.log(this.users);

    })
  }

  editUser(userID: number) {
    this.userForm.setValue({
      name: this.users[userID].name,
      email: this.users[userID].email

    });
  }

  updateUser() {
    console.log(this.userForm);
  }


}
