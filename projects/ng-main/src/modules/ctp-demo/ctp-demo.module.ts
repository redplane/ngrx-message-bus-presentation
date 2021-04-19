import {NgModule} from '@angular/core';
import {CtpDemoComponent} from './ctp-demo.component';
import {CtpDemoRoutingModule} from './ctp-demo-routing.module';
import {CtpComponent1Component} from './ctp-component-1/ctp-component-1.component';

@NgModule({
  imports: [
    CtpDemoRoutingModule
  ],
  declarations: [
    CtpDemoComponent,
    CtpComponent1Component
  ],
  exports: [
    CtpDemoComponent
  ]
})
export class CtpDemoModule {

}
