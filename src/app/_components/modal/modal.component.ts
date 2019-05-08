import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
})
export class ModalComponent {

	constructor(
		public dialogRef: MatDialogRef<ModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {

	}

	onClose(): void {
		this.dialogRef.close();
	}

	// openDialog(comp): void {
	//   console.log(comp);
	//   this.dialog.open(ModalComponent, {
	//     data: { component: comp, closeButton: true },
	//     disableClose: true
	//   });
	// }
}
