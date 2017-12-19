import { Component, ViewChild, AfterViewInit, ChangeDetectorRef  } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-pro-ui/sidedrawer';

@Component({
  selector: 'WlHome',
  moduleId: module.id,
  templateUrl: './home.component.html'
})
export class WlHomeComponent implements AfterViewInit{
  private drawer: RadSideDrawer;
  
  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;

  constructor(
    private changeDetectionRef: ChangeDetectorRef,
    private routerExtensions: RouterExtensions
  ) { }

  ngAfterViewInit(): void {
    this.drawer = this.drawerComponent.sideDrawer;
    this.changeDetectionRef.detectChanges();
  }

  public openDrawer(): void {
    this.drawer.showDrawer();
  }

  public closeDrawerTap(): void {
    this.drawer.closeDrawer();
  }

  public goBack(): void {
    this.routerExtensions.back();
  }
}