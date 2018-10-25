import { NgModule } from '@angular/core';
import { MaterialDemoComponent } from "./material-demo.component";
import { MaterialModule } from "./material.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule],
  declarations: [
    MaterialDemoComponent,
  ],
})
export class MaterialDemoModule {}
