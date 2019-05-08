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

		case GeneralActionTypes.OpenSession:
			return {
				...state,
				currentUser: action.payload
			};
			
		case GeneralActionTypes.CloseSession:
			return {
				...state,
				currentUser: null
			};

		default:
			return state;
	}
}