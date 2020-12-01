import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  status: boolean = false;
  constructor(
    public auth: AuthService,
    private router: Router
  ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.auth.isAuthenticated$.subscribe(res => {
      this.status = res;
    })
    if (this.status) {
      return true
    }
    else {
      console.log('no get buddy');
      this.router.navigate(['/login'])
      return false
    }


  }

}
