import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, Store } from '@ngrx/store';

import { CountersComponent } from './counters.component';
import { CounterComponent } from '../counter/counter.component';
import { countersReducer, AppState, AddCounter, RemoveCounter } from '../../counters.store';

describe('CountersComponent', () => {
  let component: CountersComponent;
  let fixture: ComponentFixture<CountersComponent>;
  let store: Store<AppState>;
  const initialState = {
    counters: [ 3, 1, 5, 2 ]
  };
  let addButton: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CountersComponent,
        CounterComponent
      ],
      imports: [
        CommonModule,
        StoreModule.forFeature('counters', { counters: countersReducer },
          { initialState: initialState }
        ),
        StoreModule.forRoot({})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountersComponent);
    component = fixture.componentInstance;

    store = fixture.debugElement.injector.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

    addButton = fixture.debugElement.query(By.css('.add-counter'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the correct number of counters', () => {
    expect(fixture.debugElement.queryAll(By.css('app-counter')).length).toBe(4);
  });

  it('should dispatch an ADD_COUNTER action when add is clicked', () => {
    addButton.triggerEventHandler('click', null);
    expect(store.dispatch).toHaveBeenCalledWith(new AddCounter());
  });

  it('should show the correct number of counters', () => {
    const counters = fixture.debugElement.queryAll(By.css('app-counter'));
    expect(counters.length).toBe(4);
  });

  it('should respond to ADD_COUNTER actions', () => {
    store.dispatch(new AddCounter());
    store.dispatch(new AddCounter());
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('app-counter')).length).toBe(6);
  });

  it('should respond to REMOVE_COUNTER actions', () => {
    store.dispatch(new RemoveCounter(0));
    store.dispatch(new RemoveCounter(0));
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('app-counter')).length).toBe(2);
  });
});
