import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPageModule } from "../my-page-module/my-page.module";
import { MyService } from '../my.service';

@NgModule({
  imports: [
    CommonModule,
    MyPageModule,
  ],
  exports: [
    MyPageModule
  ],
  declarations: [],
  providers: [{ provide: MyService, useClass: MyService }],
})
export class MySecondFeatureModule {
}
