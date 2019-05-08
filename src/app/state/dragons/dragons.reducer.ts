import { DragonsActionTypes, DragonsActions } from './dragons.actions';
import { Dragon } from '@app/_models';

export interface DragonsState {
	dragon: Dragon;
	dragonsList: any;
}

export const initialState: DragonsState = {
	dragon: null,
	dragonsList: null,
};

export function DragonsReducer(state: DragonsState = initialState, action: DragonsActions): DragonsState {

	switch (action.type) {

		case DragonsActionTypes.DragonsInitialState:
			return initialState;

		case DragonsActionTypes.GetDragon:
			return {
				...state,
				dragon: null
			};
		case DragonsActionTypes.GetDragonSuccess:
			return {
				...state,
				dragon: action.payload
			};

		case DragonsActionTypes.GetDragonsList:
			return {
				...state,
				dragonsList: null
			};
		case DragonsActionTypes.GetDragonsListSuccess:
			return {
				...state,
				dragonsList: action.payload
			};

		case DragonsActionTypes.CallKillTheDragon:
			return {
				...state,
				dragonsList: null
			};

		default:
			return state;
	}
}