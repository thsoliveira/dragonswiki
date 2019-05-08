import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../_services';
import { Observable } from 'rxjs/internal/Observable';
import { AppState } from '@app/state/initial';
import { Store } from '@ngrx/store';
import { OpenSession, CloseSession } from '@app/state/general/general.actions';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

	constructor(
		private _store: Store<AppState>,
		private _router: Router,
		private _authenticationService: AuthenticationService
	) { }

	canActivate(): Observable<boolean> {

		const observable = new Observable<boolean>(
			obs => {
				this._authenticationService.getCurrentUser().subscribe(
					session => {
						console.log(session);
						if (session !== undefined && session !== null) {
							this._store.dispatch(new OpenSession(session));
							obs.next(true);
						} else {
							obs.next(false);
							this._store.dispatch(new CloseSession());
							this._router.navigate(['/login']);
						}
						obs.complete();

					});
			});

		return observable;
		// this._authenticationService.getCurrentUser()
		// const currentUser = this._authenticationService.currentUserValue;
		// if (currentUser) {
		// 	console.log(currentUser);
		// 	// authorised so return true
		// 	return true;
		// }

		// // not logged in so redirect to login page with the return url
		// this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
		// return false;
	}


}