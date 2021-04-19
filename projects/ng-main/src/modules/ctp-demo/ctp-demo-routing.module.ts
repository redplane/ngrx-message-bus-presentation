import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CtpDemoComponent} from './ctp-demo.component';

const routes: Routes = [
  {
    path: '',
    component: CtpDemoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CtpDemoRoutingModule {

}
