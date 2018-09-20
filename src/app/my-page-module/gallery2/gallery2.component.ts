import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gallery2',
  templateUrl: './gallery2.component.html',
  styleUrls: ['./gallery2.component.scss']
})
export class Gallery2Component {
  text: string = 'Custom text';
  @Output() anything = new EventEmitter<string>();

  onPresssssss(num: number) {
    this.anythinge(num);
  }
}
