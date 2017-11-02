import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';

import { CountersModule } from './counters/counters.module';
import { UsersModule } from './users/users.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        CountersModule,
        UsersModule,
        SharedModule,
        AppRoutingModule,
        StoreModule.forRoot({})
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
