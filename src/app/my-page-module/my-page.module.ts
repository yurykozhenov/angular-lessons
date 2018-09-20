import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SomethingComponent} from "./gallery/gallery.component";
import {Gallery2Component} from "./gallery2/gallery2.component";
import {Gallery3Component} from "./gallery3/gallery3.component";

@NgModule({
  imports: [CommonModule],
  declarations: [
    SomethingComponent,
    Gallery2Component,
    Gallery3Component
  ],
  exports: [
    SomethingComponent,
    Gallery2Component,
    Gallery3Component
  ]
})
export class MyPageModule {

}
