import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild,
  CanLoad
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    return this.isAuthenticated();
  }

  canActivateChild(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    return this.isAuthenticated();
  }


  canLoad(): boolean {
    return this.isAuthenticated();
  }

  private isAuthenticated() {
    // this.router.navigateByUrl('YouShallNotPass');

    return true;
  }
}
