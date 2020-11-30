import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as M from 'materialize-css';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('sideNav') sideNav: any;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    console.log(this.sideNav);
    let instance = M.Sidenav.init(this.sideNav.nativeElement, { edge: 'left' });
  }

}
