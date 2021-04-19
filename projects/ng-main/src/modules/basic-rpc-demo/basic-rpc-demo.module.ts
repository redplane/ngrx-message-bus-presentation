import {NgModule} from '@angular/core';
import {BasicRpcDemoComponent} from './basic-rpc-demo.component';
import {BasicRpcDemoRoutingModule} from './basic-rpc-demo-routing.module';
import {BrpcComponent1Component} from './brpc-component-1/brpc-component-1.component';
import {BrpcComponent2Component} from './brpc-component-2/brpc-component-2.component';

@NgModule({
  imports: [
    BasicRpcDemoRoutingModule
  ],
  declarations: [
    BasicRpcDemoComponent,
    BrpcComponent1Component,
    BrpcComponent2Component
  ],
  exports: [
    BasicRpcDemoComponent
  ]
})
export class BasicRpcDemoModule {

}
