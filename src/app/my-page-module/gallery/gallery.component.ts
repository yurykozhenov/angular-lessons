import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterViewInit,
  AfterContentChecked,
  AfterViewChecked,
  OnDestroy,
  SimpleChange,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from "rxjs/index";

//

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
})
export class GalleryComponent implements OnInit,
  // OnChanges, DoCheck, AfterContentInit, AfterViewInit, AfterContentChecked,
  // AfterViewChecked,
  OnDestroy {
  @Input() myText:string;

  @Output() myTextChange = new EventEmitter<number>();

  routerSubscription: Subscription;

  onPress(num: number) {
    this.myTextChange.emit(num);
  }

  constructor(private router: Router) {
    console.log('#constructor');
    // console.log(this.myText);
  }

  // ngOnChanges(changes: SimpleChange) {
  //   console.log(changes);
  //   console.log('#ngOnChanges');
  // }

  ngOnInit() {
    console.log('#ngOnInit');
    // console.log(this.myText);
    console.log(document.getElementById('myButton'));

    this.routerSubscription = this.router.events.subscribe(event => {
      console.log(event);
    })
  }
  
  // ngDoCheck() {
  //   console.log('#ngDoCheck');
  // }
  //
  // ngAfterContentInit() {
  //   console.log('#ngAfterContentInit');
  //   console.log(document.getElementById('myButton'));
  // }
  //
  // ngAfterContentChecked() {
  //   console.log('#ngAfterContentChecked');
  // }
  //
  // ngAfterViewInit() {
  //   console.log('#ngAfterViewInit');
  //   console.log(document.getElementById('myButton'));
  // }
  //
  // ngAfterViewChecked() {
  //   console.log('#ngAfterViewChecked');
  // }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
    console.log('#ngOnDestroy');
  }
}
