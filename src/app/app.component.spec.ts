import { TestBed, async } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { CountersComponent } from './components/counters/counters.component';
import { CounterComponent } from './components/counter/counter.component';
import { countersReducer } from './store';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavComponent,
        FooterComponent,
        CountersComponent,
        CounterComponent
      ],
      imports: [
        StoreModule.forRoot({ counters: countersReducer })
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
