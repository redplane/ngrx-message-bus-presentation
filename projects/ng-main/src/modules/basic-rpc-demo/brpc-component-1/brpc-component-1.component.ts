import {Component, Inject, OnDestroy} from '@angular/core';
import {INgRxMessageBusService, MESSAGE_BUS_SERVICE_PROVIDER} from 'ngrx-message-bus';
import {Observable, ReplaySubject, Subscription} from 'rxjs';
import {CommandRequest} from '../models/command-request';
import {filter, map, take} from 'rxjs/operators';
import {CommandResponse} from '../models/command-response';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'brpc-component-1',
  templateUrl: 'brpc-component-1.component.html',
})
export class BrpcComponent1Component implements OnDestroy {

  //#region Properties

  protected readonly subscription: Subscription;

  //#endregion

  //#region Constructor

  public constructor(@Inject(MESSAGE_BUS_SERVICE_PROVIDER) protected messageBusService: INgRxMessageBusService) {
    this.subscription = new Subscription();
  }

  //#endregion

  //#region Methods

  public getComponent2Value(): void {

    const getValueSubscription = this.loadComponent2ValueAsync()
      .subscribe(value => {
        alert(`Value is ${value}`);
      });
    this.subscription.add(getValueSubscription);
  }

  public ngOnDestroy(): void {
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }

  //#endregion

  //#region Internal methods

  public loadComponent2ValueAsync(): Observable<number> {

    const subject = new ReplaySubject();
    const commandRequest = new CommandRequest();

    const hookResponseMessageSubscription = this.messageBusService
      .hookMessageChannel<CommandResponse<number>>('brpc-channel-02', 'command-response')
      .pipe(
        filter(commandResponse => commandResponse.id === commandRequest.id),
        take(1),
        map(commandResponse => commandResponse.data)
      )
      .subscribe(value => {
        subject.next(value);
      });
    this.subscription.add(hookResponseMessageSubscription);

    this.messageBusService
      .addMessage('brpc-channel-01', 'command-request', commandRequest);

    return subject as Observable<number>;
  }

  //#endregion
}
