import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/internal/operators/first';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	public loginForm: FormGroup;

	public user = 'TESTE';
	public password = 'ARCANUM';

	constructor(
		private _formBuilder: FormBuilder,
		private _router: Router,
	) { }

	ngOnInit() {
		this.loginForm = this._formBuilder.group({
			username: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	get f() { return this.loginForm.controls; }

	onSubmit() {

		// stop here if form is invalid
		if (this.loginForm.invalid) {
			return;
		}

		if(this.loginForm.value.username === this.user && this.loginForm.value.password === this.password){
			this._router.navigate(['dragons']);
		}
	}

}
