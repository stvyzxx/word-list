import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { PageRoute } from 'nativescript-angular/router';
import { NativeScriptUISideDrawerModule } from 'nativescript-pro-ui/sidedrawer/angular';
import { HomeRoutingModule } from './home-routing.module';

import { HomeSharedModule } from './shared/shared.modulte';

import { WlDashboardComponent } from './dashboard/dashboard.component';
import { WlHomeComponent } from './home.component';
import { WlLearningComponent } from './learning/learning.component';
import { WlListComponent } from './list/list.component';
import { WlListsComponent } from './lists/lists.component';
import { WlProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    HomeRoutingModule,
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptUISideDrawerModule,
    HomeSharedModule
  ],
  declarations: [
    WlHomeComponent,
    WlDashboardComponent,
    WlLearningComponent,
    WlProfileComponent,
    WlListComponent,
    WlListsComponent
  ],
  entryComponents: [
  ],
  schemas: [
      NO_ERRORS_SCHEMA
  ]
})
export class HomeModule { }
