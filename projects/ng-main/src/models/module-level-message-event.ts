import {TypedChannelEvent} from 'ngrx-message-bus';

export class ModuleLevelMessageEvent extends TypedChannelEvent<string> {

  //#region Properties

  public readonly channelName: string;

  public readonly eventName: string;

  //#endregion

  //#region Constructor

  constructor() {
    super();


  }

  //#endregion
}
