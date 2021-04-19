import {Component, Input} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ptc-component-1',
  templateUrl: 'ptc-component-1.component.html'
})
export class PtcComponent1Component {

  //#region Properties

  @Input()
  public value: number;

  public methodInvocationValue: string;

  //#endregion

  //#region Methods

  //#endregion

  //#region Methods

  public greet(): void {
    this.methodInvocationValue = 'Method has been invoked';
  }

  //#endregion
}
