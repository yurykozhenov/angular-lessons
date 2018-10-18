import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "../environments/environment";

@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('apiUrl interceptor');

    const modifiedRequest = req
      .clone({ url: environment.apiUrl + req.url });

    return next.handle(modifiedRequest);
  }
}
