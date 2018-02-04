import { Component, ViewChild, DoCheck, AfterViewInit, ChangeDetectorRef  } from '@angular/core';
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';
import "rxjs/add/operator/switchMap";

import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-pro-ui/sidedrawer';

@Component({
  selector: 'WlHome',
  moduleId: module.id,
  templateUrl: './home.component.html'
})
export class WlHomeComponent implements AfterViewInit{
  @ViewChild(RadSideDrawerComponent) 
  public drawerComponent: RadSideDrawerComponent;
  public pageName: string;
  public isOpenedDrawer = false;
  
  private drawer: RadSideDrawer;

  constructor(
    private changeDetectionRef: ChangeDetectorRef,
    private routerExtensions: RouterExtensions,
    private pageRoute: PageRoute
  ) { }
  
  ngDoCheck(): void {
    this.pageRoute.activatedRoute
    .switchMap(activatedRoute => activatedRoute.firstChild.data)
    .forEach((data) => { this.pageName = data.page; });
  }

  ngAfterViewInit(): void {
    this.drawer = this.drawerComponent.sideDrawer;
    this.changeDetectionRef.detectChanges();
  }

  public openDrawer(): void {
    this.drawer.toggleDrawerState();
  }

  public closeDrawerTap(): void {
    this.drawer.closeDrawer();
  }

  public onDrawerOpened(): void {
    this.isOpenedDrawer = true;
  }

  public onDrawerClosed(): void {
    this.isOpenedDrawer = false;
  }
}