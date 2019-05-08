import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ModalComponent } from '@app/_components/modal/modal.component';
import { Store, select } from '@ngrx/store';
import { AppState } from '@app/state/initial';
import { ConfirmationService } from 'primeng/api';
import { GetDragonsList, GetDragon, CallKillTheDragon } from '@app/state/dragons/dragons.actions';
import { selectDragons } from '@app/state/dragons/dragons.selectors';
import { DragonEditComponent } from './dragon-edit/dragon-edit.component';
import { Dragon } from '@app/_models';
import { Router } from '@angular/router';

@Component({
	selector: 'app-dragons',
	templateUrl: './dragons.component.html',
	styleUrls: ['./dragons.component.scss']
})
export class DragonsComponent implements OnInit {

	public dragons: any;
	public subscription;
	public cols: any[];
	public confirmAction: boolean;
	public dialogRef: MatDialogRef<ModalComponent>;

	constructor(
		private _store: Store<AppState>,
		private _confirmationService: ConfirmationService,
		private _modal: MatDialog,
		private _router: Router
	) { }

	ngOnInit() {

		this.confirmAction = false;

		this._store.dispatch(new GetDragonsList());

		this._store.pipe(select(selectDragons)).subscribe(data => {
			if (data !== undefined && data !== null) {
				this.dragons = data;
				if (this.dialogRef !== undefined && this.dialogRef !== null) this.dialogRef.close();
			}
		});

		this.cols = [
			{ field: 'name', header: 'Name' },
		];
	}


	seeDragon(rowData) {
		console.log(rowData);
		this._router.navigate(['/dragon-details', rowData.id]);
	}

	editDragon(rowData) {
		console.log(rowData);
		this._store.dispatch(new GetDragon(rowData.id));

		this.dialogRef = this._modal.open(ModalComponent, {
			data: { component: DragonEditComponent },
		});
		console.log(this.dialogRef);
	}

	deleteDragon(rowData) {
		this.confirmAction = true;
		this._confirmationService.confirm({
			message: 'Are you sure that you want to delete this amazing dragon?',
			accept: () => {
				this._store.dispatch(new CallKillTheDragon(rowData.id));
			}
		});
	}

}
