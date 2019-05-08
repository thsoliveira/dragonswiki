import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/state/initial';
import { DragonEditBody } from '@app/_models';
import { CallCreateDragon } from '@app/state/dragons/dragons.actions';

@Component({
	selector: 'app-dragon-creation',
	templateUrl: './dragon-creation.component.html',
	styleUrls: ['./dragon-creation.component.scss']
})
export class DragonCreationComponent implements OnInit {

	public creationForm: FormGroup;

	constructor(
		private _store: Store<AppState>,
		private _formBuilder: FormBuilder
	) { }

	ngOnInit() {
		this.creationForm = this._formBuilder.group({
			name: ['', Validators.required],
			type: ['', Validators.required]
		});
	}

	onSubmit() {
		if (this.creationForm.invalid) {
			return;
		}
		const today = new Date().toLocaleString();

		const newDragon: DragonEditBody = new DragonEditBody;
		newDragon.createdAt = today;
		newDragon.name = this.creationForm.get('name').value;
		newDragon.type = this.creationForm.get('type').value;

		this._store.dispatch(new CallCreateDragon(newDragon));
	}
}
