import {Component, HostBinding, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProfileViewModel} from '../../../view-models/profile.view-model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'div[authenticated-layout]',
  templateUrl: 'authenticated-layout.component.html'
})

export class AuthenticatedLayoutComponent implements OnInit {

  //#region Properties

  @HostBinding('id')
  public readonly hostId = 'wrapper';

  //#endregion

  //#region Constructor

  /*
  * Initiate component with injectors.
  * */
  public constructor(protected activatedRoute: ActivatedRoute) {


  }

  //#endregion

  //#region Methods

  /*
  * Event which is called when component has been initiated.
  * */
  public ngOnInit(): void {
  }

  //#endregion
}
