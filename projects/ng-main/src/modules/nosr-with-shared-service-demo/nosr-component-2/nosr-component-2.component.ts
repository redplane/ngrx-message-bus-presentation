import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {INgRxMessageBusService, MESSAGE_BUS_SERVICE_PROVIDER} from 'ngrx-message-bus';
import {ModuleLevelMessageEvent} from '../../../models/module-level-message-event';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nosr-component-2',
  templateUrl: 'nosr-component-2.component.html'
})
export class NosrComponent2Component implements OnInit, OnDestroy {

  //#region Properties

  private readonly _subscription: Subscription;

  public message: string;

  //#endregion

  //#region Constructor

  public constructor(@Inject(MESSAGE_BUS_SERVICE_PROVIDER)
                     public messageBusService: INgRxMessageBusService) {

    // Initialize subscription manager.
    this._subscription = new Subscription();
  }

  //#endregion

  //#region Methods

  public ngOnInit(): void {
    const hookParentTypedMessageSubscription = this.messageBusService
      .hookMessageChannel('channel-01', 'event-01')
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

  //#endregion
}
