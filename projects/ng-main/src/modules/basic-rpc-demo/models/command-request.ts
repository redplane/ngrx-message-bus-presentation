import {v4 as uuid} from 'uuid';

export class CommandRequest {

  //#region Properties

  public readonly id: string;

  //#endregion

  //#region Constructor

  public constructor() {
    this.id = uuid();
  }

  //#endregion
}
