import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DragonsState } from './dragons.reducer';

export const selectDragonsState = createFeatureSelector<DragonsState>('dragons');

export const selectDragon = createSelector(
	selectDragonsState,
	(dragonsState: DragonsState) => dragonsState.dragon
);

export const selectDragons = createSelector(
	selectDragonsState,
	(dragonsState: DragonsState) => dragonsState.dragonsList
);