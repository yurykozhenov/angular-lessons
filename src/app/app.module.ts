import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {MySecondFeatureModule} from "./my-second-feature/my-second-feature.module";
import {MyService} from "./my.service";
import { AppRoutingModule } from "./app-routing.module";
import { NotFoundComponent } from "./not-found/not-found.component";

class MySecondClass {
  foo() {
    console.log('blablabla')
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
