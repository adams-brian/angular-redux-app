import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { Actions, Effect } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { CounterService } from './services/counter.service';
import { AppState, INCREMENT, DECREMENT, RESET, ADD_COUNTER, REMOVE_COUNTER, LoadCounters } from './counters.store';

@Injectable()
export class CountersEffects {

  constructor(private actions: Actions, private store: Store<AppState>, private counterService: CounterService) { }
  
  @Effect() saveCounters = this.actions
    .ofType(INCREMENT, DECREMENT, RESET, ADD_COUNTER, REMOVE_COUNTER)
    .do((v) => console.log('got effects emmision'))
    .debounceTime(1000)
    .withLatestFrom(this.store)
    .switchMap(([action, state]) => this.counterService.post(state.counters))
    .switchMap(() => Observable.of())
    .catch(e => {
      console.log('Error', e);
      return Observable.of(new LoadCounters());
    });
}