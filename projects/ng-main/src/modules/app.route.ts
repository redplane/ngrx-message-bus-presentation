import {APP_INITIALIZER, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {GuardModule} from '../guards/guard.module';
import {ServiceModule} from '../services/service.module';
import {ResolveModule} from '../resolves/resolve.module';

//#endregion

//#region Properties

// Application routes configuration.
export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'nosr-with-shared-service-demo',
        loadChildren: () => import('./nosr-with-shared-service-demo/nosr-with-shared-service-demo.module')
          .then(m => m.NosrWithSharedServiceDemoModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      }
    ]
  }
];

//#endregion

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule, // required animations module
    HttpClientModule,

    // Application modules.
    GuardModule.forRoot(),
    ServiceModule.forRoot(),
    ResolveModule.forRoot(),
    RouterModule.forRoot(routes, {enableTracing: false, relativeLinkResolution: 'legacy'})
  ],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})

export class AppRouteModule {
}
