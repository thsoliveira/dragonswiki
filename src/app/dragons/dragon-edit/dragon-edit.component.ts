import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppState } from '@app/state/initial';
import { selectDragon } from '@app/state/dragons/dragons.selectors';
import { CallEditDragon } from '@app/state/dragons/dragons.actions';


@Component({
	selector: 'app-dragon-edit',
	templateUrl: './dragon-edit.component.html',
	styleUrls: ['./dragon-edit.component.scss']
})
export class DragonEditComponent implements OnInit {

	public editForm: FormGroup;
	public id: number;

	constructor(
		private _store: Store<AppState>,
		private _formBuilder: FormBuilder
	) { }

	ngOnInit() {
		this._store.pipe(select(selectDragon)).subscribe(data => {
			if (data !== undefined && data !== null) {
				console.log(data);

				this.id = data.id;

				this.editForm.setValue({
					name: data.name,
					type: data.type,
					createdAt: data.createdAt
				});
			}
		});

		this.editForm = this._formBuilder.group({
			name: ['', Validators.required],
			type: ['', Validators.required],
			createdAt: [{ value: '', disabled: true }]
		});

	}

	onSubmit() {
		if (this.editForm.invalid) {
			return;
		}

		this._store.dispatch(new CallEditDragon(this.id, this.editForm.value));
	}

}
