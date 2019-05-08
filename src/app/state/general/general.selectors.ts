import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GeneralState } from './general.reducer';

export const selectGeneralState = createFeatureSelector<GeneralState>('general');

export const selectLoading = createSelector(
	selectGeneralState,
	(generalState: GeneralState) => generalState.loading
);

export const selectOpenSession = createSelector(
	selectGeneralState,
	(generalState: GeneralState) => generalState.currentUser
);