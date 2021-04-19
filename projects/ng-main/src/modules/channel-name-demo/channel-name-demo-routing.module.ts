import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChannelNameDemoComponent} from './channel-name-demo.component';

const routes: Routes = [
  {
    path: '',
    component: ChannelNameDemoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ChannelNameDemoRoutingModule {

}
