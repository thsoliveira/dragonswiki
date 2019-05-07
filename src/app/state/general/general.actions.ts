import { Action } from '@ngrx/store';

export enum GeneralActionTypes {

	// General actions
	GeneralInitialState = '[General] General Initial State',

	ChangeLoading = '[General] Change Loading',

}

export class GeneralInitialState implements Action {
	readonly type = GeneralActionTypes.GeneralInitialState;
}

export class ChangeLoading implements Action {
	readonly type = GeneralActionTypes.ChangeLoading;

	constructor(public payload: boolean) { }
}

export type GeneralActions =
	GeneralInitialState
	| ChangeLoading