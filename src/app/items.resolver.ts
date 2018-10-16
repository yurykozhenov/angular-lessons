import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild,
  Resolve
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ItemsResolver implements Resolve<number[]> {
  constructor(private router: Router) {}

  resolve(route:ActivatedRouteSnapshot,
          state:RouterStateSnapshot): Promise<number[]> {
    return new Promise((resolve, reject) => {
      resolve([1, 2, 3]);
      // setTimeout(() => {
      //   reject(new Error('400'));
      // }, 3000);
    });
  }
}
