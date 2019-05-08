import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './state/initial';
import { selectLoading, selectOpenSession } from './state/general/general.selectors';
import { AuthenticationService } from './_services/authentication.service';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './_models';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'arcanum';

	public isLoading: boolean;

	public isLoggedIn: boolean;

	constructor(
		private _store: Store<AppState>,
		private _authenticationService: AuthenticationService
	) {
	}

	ngOnInit() {

		this._store.pipe(select(selectOpenSession)).subscribe(session => {
			this.isLoggedIn = false;
			if (session !== undefined && session !== null) {
				this.isLoggedIn = true;
			}
		});

		this._store.pipe(select(selectLoading)).subscribe(loading => {
			if (loading !== null) {
				this.isLoading = loading;
			}
		});

	}
}
