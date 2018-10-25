import { Component, ViewChild } from "@angular/core";
import { NgModel } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { BottomSheetOverlayComponent } from "./bottom-sheet-overlay/bottom-sheet-overlay.component";
import { DialogOverlayComponent } from "./dialog-overlay/dialog-overlay.component";

@Component({
  selector: 'material-demo',
  templateUrl: './material-demo.component.html',
})
export class MaterialDemoComponent {
  myValue: string;
  @ViewChild('inputModel') inputModel: NgModel;

  foods: string[] = ['Apples', 'Bananas', 'Peaches'];
  filteredOptions: Observable<string[]>;

  constructor(private bottomSheet: MatBottomSheet,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.filteredOptions = this.inputModel.valueChanges
      .pipe(
        // startWith(''),
        map(value => this._filter(value))
      );
  }

  openBottomSheet() {
    const bottomSheetRef = this.bottomSheet.open(BottomSheetOverlayComponent, {
      // hasBackdrop: true,
      // disableClose: true,
      data: {
        text: 'Hello',
      }
    });

    bottomSheetRef.afterDismissed().subscribe(result => {
      console.log(result);
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogOverlayComponent, {
      // width: 500,
      // height: 600,
      // panelClass: 'dialog-class',
      data: {
        text: 'Hello',
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }

  openSnackBar() {
    // this.snackBar.openFromComponent(BottomSheetOverlayComponent, {
    //   duration: 1000,
    // });

    const openedSnackBar = this.snackBar.open('Some text', 'Action', {
      duration: 3000,
      // announcementMessage: 'Hello',
      // horizontalPosition: 'start',
      // verticalPosition: 'top',
    });

    openedSnackBar.afterDismissed().subscribe(result => {
      console.log(result);
    });

    openedSnackBar.onAction().subscribe(result => {
      console.log(result);
    });

    // setTimeout(() => {
    //   openedSnackBar.dismiss();
    // }, 1000);
  }

  onChange(val: string) {
    console.log(val);
  }

  private _filter(value: string): string[] {
    if (value == null) return this.foods;

    const filterValue = value.toLowerCase();

    return this.foods.filter(option => option.toLowerCase().includes(filterValue));
  }
}
