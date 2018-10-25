import { Component, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

interface OverlayData {
  text: string
}

@Component({
  selector: 'bottom-sheet-overlay',
  templateUrl: './bottom-sheet-overlay.component.html',
})
export class BottomSheetOverlayComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverlayComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) private data: OverlayData) {}

  openLink(event: MouseEvent): void {
    event.preventDefault();
    console.log(this.data);
    this.bottomSheetRef.dismiss(event);
  }
}
