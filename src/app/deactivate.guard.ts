import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanDeactivate,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DeactivateGuard implements CanDeactivate<any> {
  constructor(private router: Router) {}

  canDeactivate(component: any, currentRoute:ActivatedRouteSnapshot, currentState:RouterStateSnapshot, nextState?:RouterStateSnapshot):boolean {
    // const result = confirm('ARE YOU SURE???????');

    // return result;

    return true;
  }
}
