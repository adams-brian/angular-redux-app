import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { UsersRoutingModule } from './users-routing.module';

import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';

import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    HttpModule,
    UsersRoutingModule
  ],
  providers: [
    UserService
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
