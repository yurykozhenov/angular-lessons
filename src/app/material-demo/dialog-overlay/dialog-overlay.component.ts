import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface OverlayData {
  text: string
}

@Component({
  selector: 'dialog-overlay',
  templateUrl: './dialog-overlay.component.html',
})
export class DialogOverlayComponent {
  constructor(private dialogRef: MatDialogRef<DialogOverlayComponent>,
              @Inject(MAT_DIALOG_DATA) private data: OverlayData) {}

  openLink(event: MouseEvent): void {
    event.preventDefault();
    this.dialogRef.close({ bla: 'bla', ...this.data });
  }
}
