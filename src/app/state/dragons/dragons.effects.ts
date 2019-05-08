import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AppState } from '../initial';
import { AppService } from '@app/app.service';
import { DragonsActionTypes, GetDragonsList, GetDragonsListSuccess, CallKillTheDragon, CallCreateDragon, GetDragon, GetDragonSuccess, CallEditDragon } from './dragons.actions';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { ChangeLoading } from '../general/general.actions';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable()
export class DragonsEffects {

	constructor(
		private _actions$: Actions,
		private _store: Store<AppState>,
		private _service: AppService,
	) {

	}

	@Effect()
	DragonsEffectGetOne$ = this._actions$
		.pipe(
			ofType(DragonsActionTypes.GetDragon),
			mergeMap((action: GetDragon) => {
				this._store.dispatch(new ChangeLoading(true));

				return this._service.getRequest(action.id).pipe(
					map((data: any) => {
						this._store.dispatch(new ChangeLoading(false));

						return new GetDragonSuccess(data);
					})
				)
			}),
			catchError((err, caught) => {
				return caught;
			}),
		);

	@Effect()
	DragonsEffectGetAll$ = this._actions$
		.pipe(
			ofType(DragonsActionTypes.GetDragonsList),
			mergeMap((action: GetDragonsList) => {
				this._store.dispatch(new ChangeLoading(true));

				return this._service.getRequest().pipe(
					map((data: any) => {
						this._store.dispatch(new ChangeLoading(false));

						return new GetDragonsListSuccess(data);
					})
				)
			}),
			catchError((err, caught) => {
				return caught;
			}),
		);

	@Effect()
	DragonsEffectDelete$ = this._actions$
		.pipe(
			ofType(DragonsActionTypes.CallKillTheDragon),
			mergeMap((action: CallKillTheDragon) => {
				this._store.dispatch(new ChangeLoading(true));

				return this._service.deleteRequest(action.id).pipe(
					map((data: any) => {
						this._store.dispatch(new ChangeLoading(false));

						return new GetDragonsList();
					})
				)
			}),
			catchError((err, caught) => {
				return caught;
			}),
		);

	@Effect()
	DragonsEffectPost$ = this._actions$
		.pipe(
			ofType(DragonsActionTypes.CallCreateDragon),
			mergeMap((action: CallCreateDragon) => {
				this._store.dispatch(new ChangeLoading(true));

				return this._service.postRequest(action.body).pipe(
					map((data: any) => {
						this._store.dispatch(new ChangeLoading(false));

						return new GetDragonsList();
					})
				)
			}),
			catchError((err, caught) => {
				return caught;
			}),
		);

	@Effect()
	DragonsEffectPut$ = this._actions$
		.pipe(
			ofType(DragonsActionTypes.CallEditDragon),
			mergeMap((action: CallEditDragon) => {
				this._store.dispatch(new ChangeLoading(true));

				return this._service.updateRequest(action.id, action.body).pipe(
					map((data: any) => {
						this._store.dispatch(new ChangeLoading(false));

						// this._toasterService.pop('success', '', 'A new dragon has born!');
						return new GetDragonsList();
					})
				)
			}),
			catchError((err, caught) => {
				// this._store.dispatch(new RequestCallBackError(err));
				return caught;
			}),
		);
}
