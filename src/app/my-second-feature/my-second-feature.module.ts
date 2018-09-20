import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyPageModule} from "../my-page-module/my-page.module";

@NgModule({
  imports: [
    CommonModule,
    MyPageModule,
  ],
  exports: [
    MyPageModule
  ],
  declarations: []
})
export class MySecondFeatureModule { }
