import { Component } from '@angular/core';

@Component({
  selector: 'not-found',
  template: '{{status}} <ng-content></ng-content>',
})
export class NotFoundComponent {
  status: number = 404;

  testMethod() {
    console.log('test from NotFoundComponent');
  }
}
