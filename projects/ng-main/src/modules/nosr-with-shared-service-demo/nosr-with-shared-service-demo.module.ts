import {NgModule} from '@angular/core';
import {NosrWithSharedServiceDemoRoutingModule} from './nosr-with-shared-service-demo-routing.module';
import {NosrWithSharedServiceDemoComponent} from './nosr-with-shared-service-demo.component';
import {NosrComponent1Module} from './nosr-component-1/nosr-component-1.module';

@NgModule({
  imports: [
    NosrWithSharedServiceDemoRoutingModule,
    NosrComponent1Module
  ],
  declarations: [
    NosrWithSharedServiceDemoComponent
  ]
})
export class NosrWithSharedServiceDemoModule {

}
