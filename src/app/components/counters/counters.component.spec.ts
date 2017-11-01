import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule} from '@ngrx/store';

import { CountersComponent } from './counters.component';
import { CounterComponent } from '../counter/counter.component';
import { countersReducer } from '../../store';

describe('CountersComponent', () => {
  let component: CountersComponent;
  let fixture: ComponentFixture<CountersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CountersComponent,
        CounterComponent
      ],
      imports: [
        StoreModule.forRoot({ counters: countersReducer })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
