import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {registerLocaleData } from '@angular/common';
import localeUk from '@angular/common/locales/uk';

import {AppComponent} from './app.component';
import {MySecondFeatureModule} from "./my-second-feature/my-second-feature.module";
import {MyService} from "./my.service";
import { AppRoutingModule } from "./app-routing.module";
import { NotFoundComponent } from "./not-found/not-found.component";
import { TruncatePipe } from "./truncate.pipe";
import { IfComponent } from "./if-component.component";
import { HighlightDirective } from "./highlight.directive";
import { LayoutComponent } from "./layout/layout.component";

registerLocaleData(localeUk, 'uk');

class MySecondClass {
  foo() {
    console.log('blablabla')
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    TruncatePipe,
    IfComponent,
    HighlightDirective,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
  // schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
