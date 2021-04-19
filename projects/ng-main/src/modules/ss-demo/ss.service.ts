import {EventEmitter} from '@angular/core';

export class SsService {

  //#region Properties

  public readonly sendDataEvent: EventEmitter<string>;

  //#endregion

  //#region Constructor

  public constructor() {
    this.sendDataEvent = new EventEmitter<string>();
  }

  //#endregion

}
