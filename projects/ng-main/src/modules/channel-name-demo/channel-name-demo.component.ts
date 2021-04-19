import {Component, Inject} from '@angular/core';
import {INgRxMessageBusService, MESSAGE_BUS_SERVICE_PROVIDER} from 'ngrx-message-bus';
import {OutgoingChannelEvent} from './models/outgoing.channel-event';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'channel-name-demo',
  templateUrl: 'channel-name-demo.component.html'
})
export class ChannelNameDemoComponent {

  //#region Properties

  public message: string;

  //#endregion

  //#region Constructor

  public constructor(@Inject(MESSAGE_BUS_SERVICE_PROVIDER)
                     protected messageBusService: INgRxMessageBusService) {
  }

  //#endregion

  //#region Methods

  public clickSendMessage(): void {
    this.messageBusService.addTypedMessage(new OutgoingChannelEvent(), this.message);
  }

  //#endregion
}
