import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  user: any = {}
  constructor(public auth: AuthService,) { }

  ngOnInit(): void {
    this.showUserAuthenticated();
  }


  showUserAuthenticated() {
    this.auth.user$.subscribe((usr) => {
      this.user = usr;
    });
  }

}
