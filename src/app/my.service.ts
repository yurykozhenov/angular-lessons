import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "../environments/environment";

@Injectable()
export class MyService {
  constructor(private http: HttpClient) {}

  foo() {
    console.log('bar');
  }

  getItems() {
    return this.http.get<any[]>('/todos');
  }
}
