import { GeneralActions, GeneralActionTypes } from './general.actions';
import { User } from '@app/_models';

export interface GeneralState {
	loading: boolean;
	currentUser: User;
}

export const initialState: GeneralState = {
	loading: false,
	currentUser: null
};

export function generalReducer(state: GeneralState = initialState, action: GeneralActions): GeneralState {

	switch (action.type) {

		case GeneralActionTypes.GeneralInitialState:
			return initialState;

		case GeneralActionTypes.ChangeLoading:
			return {
				...state,
				loading: action.payload
			};

		default:
			return state;
	}
}