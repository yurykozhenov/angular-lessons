import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
})
export class SomethingComponent {
  @Input() myText: string;

  @Output() myTextChange = new EventEmitter<number>();

  onPress(num: number) {
    this.myTextChange.emit(num);
  }
}
