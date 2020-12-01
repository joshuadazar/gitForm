import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import * as M from 'materialize-css';
// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from '../../../auth/services/user.service';
import { DOCUMENT } from '@angular/common';
import { Iuser } from 'src/app/auth/models/iuser';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('sideNav') sideNav: any;
  userCoockie: Iuser = {}
  user: any = { name: "", picture: "", email: "" };
  userExist: boolean = false;
  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.auth.user$.subscribe((usr) => {
      console.log(usr, 'este es el usuario');
      this.user = usr;
    });
    this.watchUserCookies();
    this.getUserCookies();
  }

  watchUserCookies() {
    this.userService.watchUserCookies().subscribe(res => {
      if (res === true) {
        console.log(res, 'rspuesta de usuario cambiado');
        this.getUserCookies();
      }
    })
  }
  getUserCookies() {
    this.userCoockie.name = document.cookie.replace(/(?:(?:^|.*;\s*)name\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    this.userCoockie.dni = document.cookie.replace(/(?:(?:^|.*;\s*)dni\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    this.userCoockie.birthday = document.cookie.replace(/(?:(?:^|.*;\s*)birthday\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    this.userCoockie.email = document.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    this.userCoockie.github = document.cookie.replace(/(?:(?:^|.*;\s*)github\s*\=\s*([^;]*).*$)|^.*$/, "$1");

  }

  userListToggle() {
    this.userExist = !this.userExist;
  }

  ngAfterViewInit() {
    let instance = M.Sidenav.init(this.sideNav.nativeElement, { edge: 'left' });
  }






}
