import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URI: string = 'http://localhost:3000';
  constructor(
    private httpClient: HttpClient
  ) { }

  getUsers() {
    return this.httpClient.get<Iuser[]>(`${this.API_URI}/users`);
  }

}
