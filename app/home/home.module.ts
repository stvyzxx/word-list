import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular";
import { HomeRoutingModule } from './home-routing.module';

import { WlHomeComponent } from './home.component';
import { WlLearningComponent } from './learning/learning.component';
import { WlDashboardComponent } from './dashboard/dashboard.component';
import { WlProfileComponent } from './profile/profile.component';
import { WlListComponent } from './list/list.component';

@NgModule({
    imports: [
        HomeRoutingModule,
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        WlHomeComponent,
        WlDashboardComponent,
        WlLearningComponent,
        WlProfileComponent,
        WlListComponent
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }