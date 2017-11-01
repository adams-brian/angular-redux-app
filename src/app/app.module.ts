import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { countersReducer } from './store';
import { CounterComponent } from './components/counter/counter.component';
import { CountersComponent } from './components/counters/counters.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    CounterComponent,
    CountersComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counters: countersReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 20
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
