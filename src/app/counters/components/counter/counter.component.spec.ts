import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { StoreModule, Store } from '@ngrx/store';

import { CounterComponent } from './counter.component';
import { countersReducer, AppState, Increment, Decrement, Reset, RemoveCounter } from '../../counters.store';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let store: Store<AppState>;
  const index = 2;
  const initialState = {
    counters: [ 3, 1, 5, 2 ]
  };
  let h1: DebugElement;
  let buttons: DebugElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ],
      imports: [
        StoreModule.forFeature('counters', { counters: countersReducer },
          { initialState: initialState }
        ),
        StoreModule.forRoot({})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    component.index = index;

    store = fixture.debugElement.injector.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

    h1 = fixture.debugElement.query(By.css('h1'));
    buttons = fixture.debugElement.queryAll(By.css('button'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the counter data for its index from the store', () => {
    expect(h1.nativeElement.textContent).toBe('5');
  });

  it('should dispatch a RemoveCounter action on close button click', () => {
    buttons[0].triggerEventHandler('click', null);
    expect(store.dispatch).toHaveBeenCalledWith(new RemoveCounter(component.index));
  });

  it('should dispatch an Increment action on increment button click', () => {
    buttons[1].triggerEventHandler('click', null);
    expect(store.dispatch).toHaveBeenCalledWith(new Increment(component.index));
  });

  it('should dispatch a Decrement action on decrement button click', () => {
    buttons[2].triggerEventHandler('click', null);
    expect(store.dispatch).toHaveBeenCalledWith(new Decrement(component.index));
  });

  it('should dispatch a Reset action on reset button click', () => {
    buttons[3].triggerEventHandler('click', null);
    expect(store.dispatch).toHaveBeenCalledWith(new Reset(component.index));
  });

  it('should display the updated counter on Increment', () => {
    store.dispatch(new Increment(component.index));
    fixture.detectChanges();
    expect(h1.nativeElement.textContent).toBe('6');
  });

  it('should display the updated counter on Decrement', () => {
    store.dispatch(new Decrement(component.index));
    fixture.detectChanges();
    expect(h1.nativeElement.textContent).toBe('4');
  });

  it('should display the updated counter on Reset', () => {
    store.dispatch(new Reset(component.index));
    fixture.detectChanges();
    expect(h1.nativeElement.textContent).toBe('0');
  });

  it('should display the new coiunter value on RemoveCounter', () => {
    store.dispatch(new RemoveCounter(component.index));
    fixture.detectChanges();
    expect(h1.nativeElement.textContent).toBe('2');
  });
});
