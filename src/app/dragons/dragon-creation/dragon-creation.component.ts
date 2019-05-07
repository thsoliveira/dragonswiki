import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-dragon-creation',
	templateUrl: './dragon-creation.component.html',
	styleUrls: ['./dragon-creation.component.scss']
})
export class DragonCreationComponent implements OnInit {

	public creationForm: FormGroup;

	constructor(private _formBuilder: FormBuilder) { }

	ngOnInit() {
		this.creationForm = this._formBuilder.group({
			name: ['', Validators.required],
			type: ['', Validators.required]
		});
	}

	onSubmit(){
		if (this.creationForm.invalid) {
			return;
		}
	}
}
