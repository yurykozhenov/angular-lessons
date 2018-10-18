import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "../environments/environment";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('token interceptor');

    const token = 'abcd'; // localStorage.getItem('token');

    const newHeaders = req.headers
      .set('Authorization', `Bearer ${token}`);
    const modifiedRequest = req
      .clone({ headers: newHeaders });

    return next.handle(modifiedRequest);
  }
}
