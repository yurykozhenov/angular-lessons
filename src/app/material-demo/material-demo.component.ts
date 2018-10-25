import { Component, ViewChild } from "@angular/core";
import { NgModel } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: 'material-demo',
  templateUrl: './material-demo.component.html',
})
export class MaterialDemoComponent {
  myValue: string;
  @ViewChild('inputModel') inputModel: NgModel;

  foods: string[] = ['Apples', 'Bananas', 'Peaches'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.inputModel.valueChanges
      .pipe(
        // startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    if (value == null) return this.foods; 

    const filterValue = value.toLowerCase();

    return this.foods.filter(option => option.toLowerCase().includes(filterValue));
  }

  onChange(val: string) {
    console.log(val);
  }
}
