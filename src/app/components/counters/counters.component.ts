import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppState, AddCounter } from '../../store';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.css']
})
export class CountersComponent implements OnInit {
  counters: Observable<Array<number>>;

  constructor(private store: Store<AppState>) {
    this.counters = store.select('counters');
  }

  addCounter() {
    this.store.dispatch(new AddCounter());
  }

  ngOnInit() {
  }

}
