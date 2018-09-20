import { Component } from '@angular/core';

@Component({
  selector: 'app-roott',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myValue: string;
  mySelectedValue: string;
  isRequired = true;
  selectValues: string[] = [
    'one', 'two', 'three'
  ]

  create() {
    console.log(this.mySelectedValue)
  }
}
