import {Component, Inject, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {INgRxMessageBusService, MESSAGE_BUS_SERVICE_PROVIDER} from 'ngrx-message-bus';
import {OutgoingChannelEvent} from '../models/outgoing.channel-event';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cnd-component-01',
  templateUrl: 'cnd-component-01.component.html'
})
export class CndComponent01Component implements OnInit {

  //#region Properties

  public basicMessage: string;

  public typedMessage: string;

  protected readonly subscription: Subscription;

  //#endregion

  //#region Constructor

  public constructor(@Inject(MESSAGE_BUS_SERVICE_PROVIDER) protected messageBusService: INgRxMessageBusService) {
    this.subscription = new Subscription();
  }

  //#endregion

  //#region Methods

  public ngOnInit(): void {

    const hookIncomingMessageSubscription = this.messageBusService
      .hookTypedMessageChannel(new OutgoingChannelEvent())
      .subscribe((message: string) => {
        this.typedMessage = message;
      });
    this.subscription.add(hookIncomingMessageSubscription);

    const hookChannelMessageSubscription = this.messageBusService
      .hookMessageChannel('cnd-channel', 'cnd-event')
      .subscribe((message: string) => {
        this.basicMessage = message;
      });
    this.subscription.add(hookChannelMessageSubscription);


  }

  //#endregion
}
