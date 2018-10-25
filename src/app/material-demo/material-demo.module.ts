import { NgModule } from '@angular/core';
import { MaterialDemoComponent } from "./material-demo.component";
import { MaterialModule } from "./material.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BottomSheetOverlayComponent } from "./bottom-sheet-overlay/bottom-sheet-overlay.component";
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from "@angular/material/snack-bar";
import { DialogOverlayComponent } from "./dialog-overlay/dialog-overlay.component";
import { MyTableComponent } from "../my-table/my-table.component";
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule, FlexLayoutModule],
  declarations: [
    MaterialDemoComponent,
    BottomSheetOverlayComponent,
    DialogOverlayComponent,
    MyTableComponent,
  ],
  entryComponents: [
    BottomSheetOverlayComponent,
    DialogOverlayComponent,
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        horizontalPosition: 'start',
        verticalPosition: 'top',
      }
    },
  ]
})
export class MaterialDemoModule {}
