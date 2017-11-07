import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { CountersRoutingModule } from './counters-routing.module';

import { CounterService } from './services/counter.service';

import { countersReducer } from './counters.store';
import { CounterComponent } from './components/counter/counter.component';
import { CountersComponent } from './components/counters/counters.component';

@NgModule({
  declarations: [
    CounterComponent,
    CountersComponent
  ],
  imports: [
    CommonModule,
    CountersRoutingModule,
    StoreModule.forFeature('counters', { counters: countersReducer })
  ],
  providers: [
    CounterService
  ],
  exports: [
    CountersComponent
  ]
})
export class CountersModule { }
