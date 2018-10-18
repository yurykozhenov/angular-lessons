import { NO_ERRORS_SCHEMA, Component, OnInit, TemplateRef, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { MyService } from "./my.service";
import { SecondService } from "./second.service";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, fromEvent, from, of, Observer } from "rxjs";
import { throttleTime, map, filter, tap, first, catchError, take, switchMap } from "rxjs/operators";
import { NgModel } from '@angular/forms';
import { NotFoundComponent } from "./not-found/not-found.component";

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
  }],
})
export class AppComponent implements OnInit {
  @ViewChild('myButton') myButton: ElementRef;
  @ViewChild('myInput') myInput: NgModel;
  @ViewChildren(NotFoundComponent) notFoundComponents: QueryList<NotFoundComponent>;

  myValue:string;
  mySelectedValue:string;
  isRequired = true;
  selectValues:string[] = [
    'one', 'two', 'three'
  ];
  myId: number = 5;
  myText: string = 'stringssss';
  today: Date = new Date();
  myObj: any;
  myData: any[];
  myObj$: Observable<any>;
  time: Observable<any>;
  aLetter = 'a';

  constructor(private secondService: SecondService,
              private httpClient: HttpClient,
              private router: Router,
              private myService: MyService) {
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

    // setTimeout(() => {
    //   console.log('Timeout!');
    // },2000);

    // this.myObj$ = this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/todos')
    //   .pipe(
    //     switchMap(data => this.httpClient.get(`https://jsonplaceholder.typicode.com/todos/${data[0].id}`))
      // map(data => data.slice(0, 5))
      // )
      // .subscribe((obj: any[]) => {
      //   this.myObj = obj;
      //   console.log(obj);
      // });

    // this.time = new Observable<string>((observer: Observer<string>) => {
    //   setInterval(() => observer.next(new Date().toString()), 1000);
    // });

    this.myService.getItems().subscribe(items => console.log(items));
  }

  create() {
    console.log(this.mySelectedValue)
  }

  navigate() {
    this.router.navigateByUrl(`/gallery/${this.myId}`).then(() => {
      console.log(this.router.isActive(`/gallery/${this.myId}`, true));
    });
  }

  changeText() {
    this.myText = 'blablabla';
  }

  test() {
    console.log(this.notFoundComponents);

    let x = 0;

    this.notFoundComponents.forEach(component => {
      component.status = x;
      x += 1;
    });

    const button = this.myButton.nativeElement as HTMLButtonElement;
    button.style.color = 'red';
  }
}
