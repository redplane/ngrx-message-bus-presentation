import {Component, NgModule, OnDestroy, OnInit} from '@angular/core';
import {SsService} from '../ss.service';
import {Subscription} from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ss-component-2',
  templateUrl: 'ss-component-2.component.html'
})
export class SsComponent2Component implements OnInit, OnDestroy {

  //#region Properties

  public message: string;

  protected subscriptions: Subscription;

  //#endregion

  //#region Constructor

  public constructor(protected ssService: SsService) {
    this.subscriptions = new Subscription();
  }

  //#endregion

  //#region Life cycle

  public ngOnInit(): void {

    const hookDataSubscription = this.ssService.sendDataEvent
      .subscribe(value => this.message = value);
    this.subscriptions.add(hookDataSubscription);
  }

  public ngOnDestroy(): void {
    if (this.subscriptions && !this.subscriptions.closed) {
      this.subscriptions.unsubscribe();
    }
  }

  //#endregion
}
