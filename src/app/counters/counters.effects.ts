import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

import { CounterService } from './services/counter.service';
import { AppState, INCREMENT, DECREMENT, RESET, ADD_COUNTER, REMOVE_COUNTER, COUNTERS_UPDATED, CountersUpdated } from './counters.store';

@Injectable()
export class CountersEffects {

  constructor(private actions: Actions, private store: Store<AppState>, private counterService: CounterService) { }

  @Effect() navigateToCounters = this.actions.ofType(ROUTER_NAVIGATION)
    .map((r: RouterNavigationAction) => r.payload.routerState.root.firstChild)
    .filter(val => val.routeConfig.path === 'counters')
    .do((v) => console.log('got navigation action, loading counters'))
    .switchMap((r: ActivatedRouteSnapshot) => this.counterService.get().map(val => new CountersUpdated(val)))
    .catch( e => {
      console.log('Network error', e);
      return Observable.of();
    });

  @Effect() saveCounters = this.actions
    .ofType(INCREMENT, DECREMENT, RESET, ADD_COUNTER, REMOVE_COUNTER)
    .do((v) => console.log('got effects emmision'))
    .debounceTime(1000)
    .withLatestFrom(this.store)
    .switchMap(([action, state]) => this.counterService.post(state.counters))
    .switchMap(() => Observable.of())
    .catch(e => {
      console.log('Error', e);
      return Observable.of();
    });
}
