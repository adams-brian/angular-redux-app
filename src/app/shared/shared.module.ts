import { NgModule } from '@angular/core';

import { SharedRoutingModule } from './shared-routing.module';

import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    SharedRoutingModule
  ],
  providers: [],
  exports: [
    NavComponent,
    FooterComponent,
    AboutComponent
  ]
})
export class SharedModule { }
