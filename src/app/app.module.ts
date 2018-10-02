import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MySecondFeatureModule} from "./my-second-feature/my-second-feature.module";
import {MyService} from "./my.service";

class MySecondClass {
  foo() {
    console.log('blablabla')
  }
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MySecondFeatureModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
