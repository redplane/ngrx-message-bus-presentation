import {Component, Inject, Input} from '@angular/core';
import {Router} from '@angular/router';
import {IAuthenticationService} from '../../../../services/interfaces/authentication-service.interface';
import {ProfileViewModel} from '../../../../view-models/profile.view-model';
import {INgRxMessageBusService} from 'ngrx-message-bus';
import {MessageChannelConstant} from '../../../../constants/message-channel.constant';
import {MessageEventConstant} from '../../../../constants/message-event.constant';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[navigation-bar]',
  templateUrl: 'navigation-bar.component.html'
})

export class NavigationBarComponent {

  //#region Properties

  // Account property.
  // tslint:disable-next-line:no-input-rename
  @Input('profile')
  public profile: ProfileViewModel;

  /*
  * Whether sidebar should be visible or not.
  * */
  public shouldSidebarVisible = false;

  //#endregion

  //#region Constructor

  // Initiate instance with IoC.
  public constructor(@Inject('IAuthenticationService') protected authenticationService: IAuthenticationService,
                     @Inject('INgRxMessageBusService') protected messageBusService: INgRxMessageBusService,
                     public router: Router) {
  }

  //#endregion

  //#region Methods

  /*
  * Sign the user out.
  * */
  public clickSignOut(): void {
    // Clear the authentication service.
    this.authenticationService.clearIdentity();

    // Re-direct to login page.
    this.router.navigate(['/login']);
  }

  /*
  * Called when side-bar toggle button is clicked.
  * */
  public clickSideBarToggle(): void {

    // Change side-bar visibility to opposite state.
    this.shouldSidebarVisible = !this.shouldSidebarVisible;

    this.messageBusService
      .addMessage<boolean>(MessageChannelConstant.ui, MessageEventConstant.displaySidebar, this.shouldSidebarVisible);
  }

  //#endregion
}