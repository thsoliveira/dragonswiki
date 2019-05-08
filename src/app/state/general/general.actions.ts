import { Action } from '@ngrx/store';

export enum GeneralActionTypes {

	// General actions
	GeneralInitialState = '[General] General Initial State',

	ChangeLoading = '[General] Change Loading',

	// LogarUsuario
	LoginUser = '[General] Login User',
	LoginUserSuccess = '[General] Login User - Success',
	LoginUserError = '[General] Login User - Error',

	OpenSession = '[General] Open session ( Login )',
	CloseSession = '[General] Close session ( Logout )',

}

export class GeneralInitialState implements Action {
	readonly type = GeneralActionTypes.GeneralInitialState;
}

export class ChangeLoading implements Action {
	readonly type = GeneralActionTypes.ChangeLoading;

	constructor(public payload: boolean) { }
}


export class LoginUser implements Action {
	readonly type = GeneralActionTypes.LoginUser;

	constructor(public body: any, public dssession: string) {
	}
}
export class LoginUserSuccess implements Action {
	readonly type = GeneralActionTypes.LoginUserSuccess;

	constructor(public payload: any) {
	}
}
export class LoginUserError implements Action {
	readonly type = GeneralActionTypes.LoginUserError;

	constructor(public payload: any) {
	}
}

export class OpenSession implements Action {
	readonly type = GeneralActionTypes.OpenSession;
	constructor(public payload: any) {
	}
}
export class CloseSession implements Action {
	readonly type = GeneralActionTypes.CloseSession;
}

export type GeneralActions =
	GeneralInitialState
	| ChangeLoading
	| LoginUser
	| LoginUserSuccess
	| LoginUserError
	| OpenSession
	| CloseSession