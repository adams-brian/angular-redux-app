import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppState, getCounters, Increment, Decrement, Reset, RemoveCounter } from '../../counters.store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() index: number;
  counters: Observable<Array<number>>;

  constructor(private store: Store<AppState>) {
    this.counters = store.select(getCounters);
  }

  increment() {
    this.store.dispatch(new Increment(this.index));
  }

  decrement() {
    this.store.dispatch(new Decrement(this.index));
  }

  reset() {
    this.store.dispatch(new Reset(this.index));
  }

  removeCounter() {
    this.store.dispatch(new RemoveCounter(this.index));
  }

  ngOnInit() {
  }

}
