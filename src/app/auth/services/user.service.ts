import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Iuser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URI: string = 'https://api.github.com/users';
  private UserCoockies = new Subject<boolean>();
  constructor(
    private httpClient: HttpClient
  ) { }

  getUsers(user: string) {
    return this.httpClient.get<any[]>(`${this.API_URI}/${user}/repos`);
  }

  // watch user Value
  watchUserCookies(): Observable<boolean> {
    return this.UserCoockies.asObservable();
  }

  setUserCookies(userChange: boolean) {
    this.UserCoockies.next(userChange);
  }

}
