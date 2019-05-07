import { GeneralActions, GeneralActionTypes } from './general.actions';

export interface GeneralState {
	loading: boolean;
}

export const initialState: GeneralState = {
	loading: false,
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