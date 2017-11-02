import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { UsersRoutingModule } from './users-routing.module';

import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
  ],
  imports: [
    UsersRoutingModule
  ],
  providers: [],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
