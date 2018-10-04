import { Component, OnInit } from '@angular/core';
import { MyService } from "./my.service";
import { SecondService } from "./second.service";
import { HttpClient } from "@angular/common/http";
import { Observable, fromEvent, from, of, Observer } from "rxjs";
import { throttleTime, map, filter, tap, first, catchError, take, switchMap } from "rxjs/operators";

@Component({
  selector: 'app-roott',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [{
    provide: SecondService, useValue: {
      bar() {
        console.log('bazzzzz')
      }
    }
  }]
})
export class AppComponent implements OnInit {
  myValue:string;
  mySelectedValue:string;
  isRequired = true;
  selectValues:string[] = [
    'one', 'two', 'three'
  ];

  constructor(private secondService:SecondService,
              private httpClient:HttpClient) {
  }

  ngOnInit() {
    // const button = document.getElementById('btn');
    //
    // const interval = (time:number) =>
    //   Observable.create((observer:Observer) => {
    //     let counter = 0;
    //
    //     setInterval(() => {
    //       observer.next(counter++);
    //
    //       if (counter === 5) {
    //         observer.error('Your counter is 5!');
    //       }
    //     }, time);
    //   });
    //
    // interval(1000).pipe(
    //   switchMap(() => interval(2000)),
    // ).subscribe(
    //   data => console.log(`Data: ${data}`),
    //   error => console.log(`Error: ${error}`),
    //   () => {
    //     console.log('end');
    //   });
    //
    // const observable = interval(1000).pipe(
    //   throttleTime(1000),
    //   first(),
    //   map(event => ({ x: event.x, y: event.y })),
    //   filter(event => event.x < 250),
    //   tap(event => {
    //     console.log({ y: event.y });
    //   }),
    //   take(3)
    // );
    //
    // observable.subscribe(event => console.log('bla'));

    this.httpClient.get('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        switchMap(data => this.httpClient.get(`https://jsonplaceholder.typicode.com/todos/${data[0].id}`))
      )
      .subscribe(data => {
        console.log(data);
      });
  }

  create() {
    console.log(this.mySelectedValue)
  }
}
