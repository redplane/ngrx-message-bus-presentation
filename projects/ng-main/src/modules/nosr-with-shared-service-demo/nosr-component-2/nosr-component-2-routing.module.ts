import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NosrComponent2Component} from './nosr-component-2.component';

const routes: Routes = [
  {
    path: '',
    component: NosrComponent2Component
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
export class NosrComponent2RoutingModule {

}
