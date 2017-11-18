import { NgModule, Injectable } from '@angular/core';
import { RouterModule, Routes, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { CountersComponent } from './components/counters/counters.component';
import { CounterService } from './services/counter.service';
import { AppState, CountersUpdated } from './counters.store';
import { StartLoading, DoneLoading } from '../app.store';


@Injectable()
export class CountersResolver implements Resolve<boolean> {

  constructor(private counterService: CounterService, private store: Store<AppState>) {}

  resolve() {
    this.store.dispatch(new StartLoading());
    return this.counterService.get()
      .switchMap((v) => {
        this.store.dispatch(new CountersUpdated(v));
        this.store.dispatch(new DoneLoading());
        return Observable.of(true);
      });
  }
}

const routes = [
  {
    path: 'counters',
    component: CountersComponent,
    resolve: [ CountersResolver ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CountersResolver
  ]
})
export class CountersRoutingModule { }
