import {NgModule} from '@angular/core';
import {SsDemoComponent} from './ss-demo.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SsDemoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class SsDemoRoutingModule {

}
