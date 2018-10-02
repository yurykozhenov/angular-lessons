import {Injectable} from "@angular/core";
import {MyService} from "./my.service";

@Injectable({
  providedIn: 'root'
})
export class SecondService {
  constructor(private myService: MyService) {}

  bar() {
    this.myService.foo();
  }
}
