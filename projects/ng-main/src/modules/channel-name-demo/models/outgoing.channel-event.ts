import {TypedChannelEvent} from 'ngrx-message-bus';

export class OutgoingChannelEvent extends TypedChannelEvent<string> {
  
  //#region Properties

  public readonly channelName: string;

  public readonly eventName: string;

  //#endregion

  //#region Constructor

  public constructor() {
    super();

    this.channelName = 'cnd-channel';
    this.eventName = 'cnd-event';
  }

  //#endregion

}
