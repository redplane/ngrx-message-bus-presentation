import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {INgRxMessageBusService, MESSAGE_BUS_SERVICE_PROVIDER} from 'ngrx-message-bus';
import {CommandRequest} from '../models/command-request';
import {CommandResponse} from '../models/command-response';
import {Subscription} from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'brpc-component-2',
  templateUrl: 'brpc-component-2.component.html',
})
export class BrpcComponent2Component implements OnInit, OnDestroy {

  //#region Properties

  public value: number;

  public commandCalled: boolean;

  protected readonly subscription: Subscription;

  //#endregion

  //#region Constructor

  public constructor(@Inject(MESSAGE_BUS_SERVICE_PROVIDER) protected messageBusService: INgRxMessageBusService) {
    this.value = 100;
    this.subscription = new Subscription();
  }

  //#endregion


  //#region Methods

  public ngOnInit(): void {

    const hookIncomingMessageSubscription = this.messageBusService
      .hookMessageChannel<CommandRequest>('brpc-channel-01', 'command-request')
      .subscribe(message => {
        this.commandCalled = true;
        const commandResponse = new CommandResponse(message.id, this.value);
        this.messageBusService.addMessage('brpc-channel-02', 'command-response', commandResponse);
      });

    this.subscription.add(hookIncomingMessageSubscription);
  }

  public ngOnDestroy(): void {
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }

  //#endregion

}
