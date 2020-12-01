import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { LoginComponent, UserTableComponent } from './index';

@NgModule({
  declarations: [
    LoginComponent,
    UserTableComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
    LoginComponent,
    UserTableComponent
  ]
})
export class AuthUserModule { }
