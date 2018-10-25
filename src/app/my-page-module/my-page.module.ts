import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {GalleryComponent} from "./gallery/gallery.component";
import {Gallery2Component} from "./gallery2/gallery2.component";
import {Gallery3Component} from "./gallery3/gallery3.component";

import { MyPageRoutingModule } from './my-page-routing.module';
import { GalleryItemComponent } from "./gallery-item/gallery-item.component";
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from "@angular/material/snack-bar";

@NgModule({
  imports: [CommonModule, MyPageRoutingModule],
  declarations: [
    GalleryComponent,
    Gallery2Component,
    Gallery3Component,
    GalleryItemComponent
  ],
  exports: [
    GalleryComponent,
    Gallery2Component,
    Gallery3Component
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        horizontalPosition: 'end',
        verticalPosition: 'bottom',
      }
    },
  ]
})
export class MyPageModule {

}
