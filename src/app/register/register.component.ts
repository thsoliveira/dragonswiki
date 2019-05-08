import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserService, AuthenticationService } from '../_services';
import { MustMatch } from '@app/_helpers/must-match.validator';

@Component({ templateUrl: 'register.component.html' })

export class RegisterComponent implements OnInit {
	registerForm: FormGroup;
	loading = false;
	submitted = false;

	constructor(
		private _formBuilder: FormBuilder,
		private _router: Router,
		private _authenticationService: AuthenticationService,
		private _userService: UserService,
	) {
		// redirect to home if already logged in
		if (this._authenticationService.currentUserValue) {
			this._router.navigate(['/']);
		}
	}

	ngOnInit() {
		this.registerForm = this._formBuilder.group({
			username: ['', [Validators.required]],
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			password: ['', [Validators.required, Validators.minLength(3)]],
			confirmPassword: ['', Validators.required]
		}, {
				validator: MustMatch('password', 'confirmPassword')
			});
	}

	// convenience getter for easy access to form fields
	get f() { return this.registerForm.controls; }

	onSubmit() {
		this.submitted = true;

		// stop here if form is invalid
		if (this.registerForm.invalid) {
			return;
		}

		this.loading = true;
		this._userService.register(this.registerForm.value)
			.pipe(first())
			.subscribe(
				data => {
					// this.alertService.success('Registration successful', true);
					this._router.navigate(['/login']);
				},
				error => {
					// this.alertService.error(error);
					this.loading = false;
				});
	}
}
