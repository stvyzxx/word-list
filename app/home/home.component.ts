import { Component, ViewChild, AfterViewInit, ChangeDetectorRef  } from '@angular/core';
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
    private changeDetectionRef: ChangeDetectorRef
  ) { }

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this.changeDetectionRef.detectChanges();
  }

  public openDrawer() {
    this.drawer.showDrawer();
  }

  public closeDrawerTap() {
    this.drawer.closeDrawer();
  }
}