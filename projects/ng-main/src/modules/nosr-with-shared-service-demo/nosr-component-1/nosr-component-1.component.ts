import {Component, Inject} from '@angular/core';
import {ModuleLevelMessageEvent} from '../../../models/module-level-message-event';
import {INgRxMessageBusService, MESSAGE_BUS_SERVICE_PROVIDER} from 'ngrx-message-bus';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nosr-component-1',
  templateUrl: 'nosr-component-1.component.html'
})
export class NosrComponent1Component {

  //#region Constructor
  public constructor(@Inject(MESSAGE_BUS_SERVICE_PROVIDER)
                     protected messageBusService: INgRxMessageBusService) {

  }

  //#endregion
  public sendClicked(): void {
    const message = 'Component 1 button has been clicked';

    this.messageBusService
      .addMessage('channel-01', 'event-01', message);
  }
}
