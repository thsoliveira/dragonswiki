import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/internal/operators/first';
import { AuthenticationService } from '@app/_services';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

	public loginForm: FormGroup;
	public submitted = false;
	public returnUrl: string;

	constructor(
		private _formBuilder: FormBuilder,
		private _route: ActivatedRoute,
		private _router: Router,
		private _authenticationService: AuthenticationService,
		// private _alertService: AlertService
	) { }

	ngOnInit() {
		this.loginForm = this._formBuilder.group({
			username: ['', Validators.required],
			password: ['', Validators.required]
		});


		// get return url from route parameters or default to '/'
		this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
	}

	// convenience getter for easy access to form fields
	get f() { return this.loginForm.controls; }

	onSubmit() {

		// stop here if form is invalid
		if (this.loginForm.invalid) {
			return;
		}

		this._authenticationService.login(this.f.username.value, this.f.password.value)
			.pipe(first())
			.subscribe(
				data => {
					this._router.navigate([this.returnUrl]);
				},
				error => {
					// this._alertService.error(error);
					// this.loading = false;
				});
	}

}
