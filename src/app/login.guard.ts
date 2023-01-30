import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router:Router, private auth:AuthService) {
  }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = this.auth.getToken();
    console.log(token);
    
    //const token=localStorage.getItem('token');
    //return (!!token); //!! retourn boolen true ou false
    if (token == undefined) {
      // not even connected (  )
      // redirect to login !!
      this.router.navigateByUrl('/login-register')
      return false;
    }

    return true;


  }

}
