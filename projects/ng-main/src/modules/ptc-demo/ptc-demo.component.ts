import {Component, forwardRef, ViewChild} from '@angular/core';
import {PtcComponent1Component} from './ptc-component-1/ptc-component-1.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ptc-demo',
  templateUrl: 'ptc-demo.component.html',
  styleUrls: ['ptc-demo.component.css']
})
export class PtcDemoComponent {

  //#region Properties

  public value: number;

  @ViewChild(forwardRef(() => PtcComponent1Component))
  public componentRef: PtcComponent1Component;

  //#endregion

  //#region Constructor

  //#endregion

  //#region Methods

  public callComponentMethod(): void {
    this.componentRef.greet();
  }

  public passRandomNumberToComponent(): void {
    this.value = 100;
  }

  //#endregion

}
