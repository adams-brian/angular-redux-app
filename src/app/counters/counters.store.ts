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
export const COUNTERS_UPDATED = '[Counters] COUNTERS UPDATED';
export class CountersUpdated implements Action {
  readonly type = COUNTERS_UPDATED;
  constructor(public payload: number[]) {}
}

type CounterAction = Increment | Decrement | Reset | AddCounter | RemoveCounter | CountersUpdated;

export interface CountersState {
  counters: Array<number>;
}

export interface AppState extends AppState {
  counters: CountersState;
}

const getCountersState = createFeatureSelector<CountersState>('counters');

export const getCounters = createSelector(getCountersState,
  (state: CountersState) => state.counters);

export function countersReducer(state: Array<number> = [], action: CounterAction) {
  switch (action.type) {
    case INCREMENT:
      return [
        ...state.slice(0, action.payload),
        state[action.payload] + 1,
        ...state.slice(action.payload + 1)
      ];
    case DECREMENT:
      return [
        ...state.slice(0, action.payload),
        state[action.payload] - 1,
        ...state.slice(action.payload + 1)
      ];
    case RESET:
      return [
        ...state.slice(0, action.payload),
        0,
        ...state.slice(action.payload + 1)
      ];
    case ADD_COUNTER:
      return [...state, 0];
    case REMOVE_COUNTER:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    case COUNTERS_UPDATED:
      return [...action.payload];
    default:
      return state;
  }
}
