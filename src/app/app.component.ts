import { Component, OnInit } from '@angular/core';
import {MyService} from "./my.service";
import {SecondService} from "./second.service";

@Component({
  selector: 'app-roott',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [ { provide: SecondService, useValue: { bar() { console.log('bazzzzz') } } } ]
})
export class AppComponent implements OnInit {
  myValue: string;
  mySelectedValue: string;
  isRequired = true;
  selectValues: string[] = [
    'one', 'two', 'three'
  ];

  constructor(private secondService: SecondService) {}

  ngOnInit() {
    this.secondService.bar();
  }

  create() {
    console.log(this.mySelectedValue)
  }
}
