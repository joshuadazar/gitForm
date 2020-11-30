import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import * as M from 'materialize-css';
// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('sideNav') sideNav: any;
  user: any = { name: "", picture: "", email: "" };
  userExist: boolean = true;
  constructor(
    @Inject(DOCUMENT) public document: Document, public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.auth.user$.subscribe((usr) => {
      console.log(usr, 'este es el usuario');
      this.user = usr;
    });
  }
  userListToggle() {
    this.userExist = !this.userExist;
  }

  ngAfterViewInit() {
    let instance = M.Sidenav.init(this.sideNav.nativeElement, { edge: 'left' });
  }



}
