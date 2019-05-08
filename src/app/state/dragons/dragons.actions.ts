import { Action } from '@ngrx/store';
import { DragonEditBody } from '@app/_models';

export enum DragonsActionTypes {

	// POST
	CallCreateDragon = '[Dragons] Call create dragon',

	// General actions
	DragonsInitialState = '[Dragons] Initial State',

	// GET ALL DRAGONS
	GetDragonsList = '[Dragons] Get list of dragons',
	GetDragonsListSuccess = '[Dragons] Save list of dragons',

	// GET DRAGON
	GetDragon = '[Dragons] Get a dragon by id',
	GetDragonSuccess = '[Dragons] Get a dragon by id - Success',

	// EDIT
	CallEditDragon = '[Dragons] Call edit dragon',

	// DEL
	CallKillTheDragon = '[Dragpms] Kill the dragon!',
	// CallKillTheDragonSuccess = '[Dragpms] Kill the dragon! - YOU DID IT'
}

export class DragonsInitialState implements Action {
	readonly type = DragonsActionTypes.DragonsInitialState;
}

export class GetDragonsList implements Action {
	readonly type = DragonsActionTypes.GetDragonsList;
}

export class GetDragonsListSuccess implements Action {
	readonly type = DragonsActionTypes.GetDragonsListSuccess;

	constructor(public payload: any) { }
}

export class GetDragon implements Action {
	readonly type = DragonsActionTypes.GetDragon;

	constructor(public id: number) { }
}

export class GetDragonSuccess implements Action {
	readonly type = DragonsActionTypes.GetDragonSuccess;

	constructor(public payload: any) { }
}

export class CallCreateDragon implements Action {
	readonly type = DragonsActionTypes.CallCreateDragon;

	constructor(public body: DragonEditBody) { }
}

export class CallEditDragon implements Action {
	readonly type = DragonsActionTypes.CallEditDragon;

	constructor(public id: number, public body: DragonEditBody) { }
}
export class CallKillTheDragon implements Action {
	readonly type = DragonsActionTypes.CallKillTheDragon;

	constructor(public id: number,) { }
}

// export class CallKillTheDragonSuccess implements Action {
// 	readonly type = DragonsActionTypes.CallKillTheDragonSuccess;
// }

export type DragonsActions =
	DragonsInitialState
	| GetDragonsList
	| GetDragonsListSuccess
	| GetDragon
	| GetDragonSuccess
	| CallCreateDragon
	| CallEditDragon
	| CallKillTheDragon
	// | CallKillTheDragonSuccess