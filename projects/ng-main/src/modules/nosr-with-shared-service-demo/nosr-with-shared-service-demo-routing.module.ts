import {RouterModule, Routes} from '@angular/router';
import {NosrWithSharedServiceDemoComponent} from './nosr-with-shared-service-demo.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: NosrWithSharedServiceDemoComponent,
    children: [
      {
        path: 'with-component-2',
        loadChildren: () => import('./nosr-component-2/nosr-component-2.module')
          .then(m => m.NosrComponent2Module)
      }
    ]
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
export class NosrWithSharedServiceDemoRoutingModule {

}
