import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PtcDemoComponent} from './ptc-demo.component';

const routes: Routes = [
  {
    path: '',
    component: PtcDemoComponent
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
export class PtcDemoRoutingModule {

}
