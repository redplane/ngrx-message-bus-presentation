import {NgModule} from '@angular/core';
import {SsDemoComponent} from './ss-demo.component';
import {SsDemoRoutingModule} from './ss-demo-routing.module';
import {SsComponent1Component} from './ss-component-1/ss-component-1.component';
import {SsComponent2Component} from './ss-component-2/ss-component-2.component';
import {SsService} from './ss.service';

@NgModule({
  imports: [
    SsDemoRoutingModule
  ],
  exports: [
    SsComponent1Component,
    SsComponent2Component
  ],
  declarations: [
    SsDemoComponent,
    SsComponent1Component,
    SsComponent2Component
  ],
  providers: [
    SsService
  ]
})
export class SsDemoModule {

}
