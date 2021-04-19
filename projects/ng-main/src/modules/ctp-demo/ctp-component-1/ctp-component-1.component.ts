import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ctp-component-1',
  templateUrl: 'ctp-component-1.component.html'
})
export class CtpComponent1Component {

  //#region Properties

  @Output()
  public dataEmitEvent: EventEmitter<string>;

  //#endregion

  //#region Constructor

  public constructor() {
    this.dataEmitEvent = new EventEmitter<string>();
  }

  //#endregion

  //#region Methods

  public sendDataToParent(): void {
    this.dataEmitEvent.emit('Hello world');
  }

  //#endregion
}
