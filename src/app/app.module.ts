import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {MySecondFeatureModule} from "./my-second-feature/my-second-feature.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MySecondFeatureModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
