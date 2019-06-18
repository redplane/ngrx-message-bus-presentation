
import {mergeMap, map, filter} from 'rxjs/operators';
import {Component, Host, HostBinding, OnInit, Renderer2} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";




@Component({
  selector: 'body',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {

  title = 'app';

  //#region Properties

  @HostBinding('class')
  public hostClass: string = 'page-top';

  //#endregion

  //#region Constructor

  public constructor(private router: Router,
                     private activatedRoute: ActivatedRoute,
                     private renderer: Renderer2) {

  }

  //#endrgion

  //#region Methods

  /*
  * Called when component is being initiated.
  * */
  public ngOnInit(): void {

    // Register to router events to set application layout.
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data),)
      .subscribe((event) => {
        let classes = event.appCssClasses;

        if (!classes || classes.length < 1)
          return;

        for (let szClass of classes){
          this.renderer.addClass(document.body, szClass);
        }


      });
  }


  //#endregion
}
