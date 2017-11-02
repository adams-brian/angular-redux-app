import { Action } from '@ngrx/store';

abstract class ActionWithNumberPayload implements Action {
  readonly type: string;
  constructor(public payload: number) {}
}
const INCREMENT = 'INCREMENT';
export class Increment extends ActionWithNumberPayload {
  readonly type = INCREMENT;
}
const DECREMENT = 'DECREMENT';
export class Decrement extends ActionWithNumberPayload {
  readonly type = DECREMENT;
}
const RESET = 'RESET';
export class Reset extends ActionWithNumberPayload {
  readonly type = RESET;
}
const ADD_COUNTER = 'ADD COUNTER';
export class AddCounter implements Action {
  readonly type = ADD_COUNTER;
  constructor() { }
}
const REMOVE_COUNTER = 'REMOVE COUNTER';
export class RemoveCounter extends ActionWithNumberPayload {
  readonly type = REMOVE_COUNTER;
}

export interface AppState {
    counters: Array<number>;
}

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
