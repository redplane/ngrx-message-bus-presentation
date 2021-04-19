import {NgModule} from '@angular/core';
import {ChannelNameDemoComponent} from './channel-name-demo.component';
import {ChannelNameDemoRoutingModule} from './channel-name-demo-routing.module';
import {FormsModule} from '@angular/forms';
import {CndComponent01Component} from './cnd-component-01/cnd-component-01.component';

@NgModule({
  imports: [
    ChannelNameDemoRoutingModule,
    FormsModule
  ],
  declarations: [
    ChannelNameDemoComponent,
    CndComponent01Component
  ]
})
export class ChannelNameDemoModule {

}
