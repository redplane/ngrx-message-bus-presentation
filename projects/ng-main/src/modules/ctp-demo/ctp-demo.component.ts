import {Component, forwardRef, ViewChild} from '@angular/core';
import {CtpComponent1Component} from './ctp-component-1/ctp-component-1.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ctp-demo',
  templateUrl: 'ctp-demo.component.html',
  styleUrls: ['ctp-demo.component.css']
})
export class CtpDemoComponent {

  //#region Properties

  public value: number;

  @ViewChild(forwardRef(() => CtpComponent1Component))
  public componentRef: CtpComponent1Component;

  //#endregion

  //#region Constructor

  //#endregion

  //#region Methods

  public onDataEmitted(message: string): void {
    alert(message);
  }

  //#endregion

}
