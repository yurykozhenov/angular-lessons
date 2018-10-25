import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
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
import { ApiUrlInterceptor } from "./api-url.interceptor";
import { TokenInterceptor } from "./token.interceptor";
import { MaterialDemoModule } from "./material-demo/material-demo.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from "@angular/material/snack-bar";
import { MyPageModule } from "./my-page-module/my-page.module";
import { MyTableComponent } from './my-table/my-table.component';

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
    MyPageModule,
    MaterialDemoModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    MyService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiUrlInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },

    // {
    //   provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
    //   useValue: {
    //     horizontalPosition: 'end',
    //     verticalPosition: 'bottom',
    //   }
    // },
  ],
  // schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
