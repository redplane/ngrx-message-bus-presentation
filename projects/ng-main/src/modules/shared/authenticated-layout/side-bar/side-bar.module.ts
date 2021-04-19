import {NgModule} from '@angular/core';
import {SideBarComponent} from './side-bar.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        SideBarComponent
    ],
    imports: [
        RouterModule
    ],
    exports: [
        SideBarComponent
    ]
})
export class SideBarModule {

}
