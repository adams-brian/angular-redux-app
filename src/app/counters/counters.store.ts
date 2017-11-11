import { Action, createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '../app.store';

abstract class ActionWithNumberPayload implements Action {
  readonly type: string;
  constructor(public payload: number) {}
}
export const INCREMENT = '[Counters] INCREMENT';
export class Increment extends ActionWithNumberPayload {
  readonly type = INCREMENT;
}
export const DECREMENT = '[Counters] DECREMENT';
export class Decrement extends ActionWithNumberPayload {
  readonly type = DECREMENT;
}
export const RESET = '[Counters] RESET';
export class Reset extends ActionWithNumberPayload {
  readonly type = RESET;
}
export const ADD_COUNTER = '[Counters] ADD COUNTER';
export class AddCounter implements Action {
  readonly type = ADD_COUNTER;
}
export const REMOVE_COUNTER = '[Counters] REMOVE COUNTER';
export class RemoveCounter extends ActionWithNumberPayload {
  readonly type = REMOVE_COUNTER;
}
export const LOAD_COUNTERS = '[Counters] LOAD COUNTERS';
export class LoadCounters implements Action {
  readonly type = LOAD_COUNTERS;
}

export interface CountersState {
  counters: Array<number>;
}

export interface AppState extends AppState {
  counters: CountersState;
}

const getCountersState = createFeatureSelector<CountersState>('counters');

export const getCounters = createSelector(getCountersState,
  (state: CountersState) => state.counters);

export function countersReducer(state: Array<number> = [], action: ActionWithNumberPayload) {
  const index = action.payload;
  switch (action.type) {
    case INCREMENT:
      return [
        ...state.slice(0, index),
        state[index] + 1,
        ...state.slice(index + 1)
      ];
    case DECREMENT:
      return [
        ...state.slice(0, index),
        state[index] - 1,
        ...state.slice(index + 1)
      ];
    case RESET:
      return [
        ...state.slice(0, index),
        0,
        ...state.slice(index + 1)
      ];
    case ADD_COUNTER:
      return [...state, 0];
    case REMOVE_COUNTER:
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    default:
      return state;
  }
}
