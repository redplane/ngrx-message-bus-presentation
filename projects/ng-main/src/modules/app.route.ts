import {APP_INITIALIZER, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {GuardModule} from '../guards/guard.module';
import {ServiceModule} from '../services/service.module';
import {ResolveModule} from '../resolves/resolve.module';
import {AuthenticatedLayoutComponent} from './shared/authenticated-layout/authenticated-layout.component';
import {AuthenticatedLayoutModule} from './shared/authenticated-layout/authenticated-layout.module';

//#endregion

//#region Properties

// Application routes configuration.
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: AuthenticatedLayoutComponent,
    children: [
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
        path: 'ptc-demo',
        loadChildren: () => import('./ptc-demo/ptc-demo.module')
          .then(m => m.PtcDemoModule)
      },
      {
        path: 'ctp-demo',
        loadChildren: () => import('./ctp-demo/ctp-demo.module')
          .then(m => m.CtpDemoModule)
      },
      {
        path: 'ss-demo',
        loadChildren: () => import('./ss-demo/ss-demo.module')
          .then(m => m.SsDemoModule)
      },
      {
        path: 'basic-rpc-demo',
        loadChildren: () => import('./basic-rpc-demo/basic-rpc-demo.module')
          .then(m => m.BasicRpcDemoModule)
      },
      {
        path: 'typed-message-demo',
        loadChildren: () => import('./channel-name-demo/channel-name-demo.module')
          .then(m => m.ChannelNameDemoModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];

//#endregion

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AuthenticatedLayoutModule,
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
