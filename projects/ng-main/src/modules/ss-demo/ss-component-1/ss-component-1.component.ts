import {Component, OnInit} from '@angular/core';
import {SsService} from '../ss.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ss-component-1',
  templateUrl: 'ss-component-1.component.html'
})
export class SsComponent1Component {

  //#region Properties

  protected index: number;

  //#endregion

  //#region Constructor

  public constructor(protected ssService: SsService) {
    this.index = 0;
  }

  //#endregion

  //#region Methods

  public sendDataToComponent2(): void {
    this.ssService.sendDataEvent.emit(`This is message: ${this.index}`);
    this.index++;
  }

  //#endregion

}
