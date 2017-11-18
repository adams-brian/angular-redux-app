import { Action, createSelector } from '@ngrx/store';

export const START_LOADING = '[App] START LOADING';
export class StartLoading implements Action {
  readonly type = START_LOADING;
}
export const DONE_LOADING = '[App] DONE LOADING';
export class DoneLoading implements Action {
  readonly type = DONE_LOADING;
}

export interface AppState {
  loading: boolean;
}

type AppAction = StartLoading | DoneLoading;

export function loadingReducer(state: boolean = false, action: AppAction) {
  switch (action.type) {
    case START_LOADING:
      return true;
    case DONE_LOADING:
      return false;
    default:
      return state;
  }
}
