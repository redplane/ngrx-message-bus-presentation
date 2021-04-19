import {NgModule} from '@angular/core';
import {PtcDemoComponent} from './ptc-demo.component';
import {PtcDemoRoutingModule} from './ptc-demo-routing.module';
import {PtcComponent1Component} from './ptc-component-1/ptc-component-1.component';

@NgModule({
  imports: [
    PtcDemoRoutingModule
  ],
  declarations: [
    PtcDemoComponent,
    PtcComponent1Component
  ],
  exports: [
    PtcDemoComponent
  ]
})
export class PtcDemoModule {

}
