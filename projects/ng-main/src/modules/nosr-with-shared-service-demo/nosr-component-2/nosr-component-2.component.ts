import {Component, Inject, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {INgRxMessageBusService, MESSAGE_BUS_SERVICE_PROVIDER} from 'ngrx-message-bus';
import {ModuleLevelMessageEvent} from '../../../models/module-level-message-event';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nosr-component-2',
  templateUrl: 'nosr-component-2.component.html'
})
export class NosrComponent2Component implements OnDestroy{
  private readonly _subscription: Subscription;
  public message: string;

  public constructor(@Inject(MESSAGE_BUS_SERVICE_PROVIDER) public messageBusService: INgRxMessageBusService) {
    // Initialize subscription manager.
    this._subscription = new Subscription();

    const channelEvent = new ModuleLevelMessageEvent();
    const hookParentTypedMessageSubscription = this.messageBusService
      .hookTypedMessageChannel(channelEvent)
      .subscribe((value: string) => {
        this.message = value;
      });

    this._subscription.add(hookParentTypedMessageSubscription);
  }

  public ngOnDestroy(): void {

    // Destroy the subscription to prevent memory leak.
    if (this._subscription && !this._subscription.closed) {
      this._subscription.unsubscribe();
    }
  }
}
