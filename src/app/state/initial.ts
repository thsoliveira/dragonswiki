import { ActionReducerMap } from '@ngrx/store';

import { GeneralState, generalReducer } from './general/general.reducer';

export interface AppState {
	general: GeneralState;
}

export const reducers: ActionReducerMap<AppState> = {
	general: generalReducer
};