import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BasicRpcDemoComponent} from './basic-rpc-demo.component';

const routes: Routes = [
  {
    path: '',
    component: BasicRpcDemoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class BasicRpcDemoRoutingModule {

}
