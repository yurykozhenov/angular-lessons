import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery3',
  templateUrl: './gallery3.component.html',
  styleUrls: ['./gallery3.component.scss']
})
export class Gallery3Component implements OnInit {
  @Input() something: string;

  constructor() { }

  ngOnInit() {
  }

}
