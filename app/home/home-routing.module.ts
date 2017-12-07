import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { AuthGuard } from '../shared/services/auth-guard.service';

import { WlHomeComponent } from './home.component';
import { WlLearningComponent } from './learning/learning.component';
import { WlDashboardComponent } from './dashboard/dashboard.component';
import { WlProfileComponent } from './profile/profile.component';
import { WlListComponent } from './list/list.component';

const routes: Routes = [
    {
        path: '',
        component: WlHomeComponent,
        children: [
            { 
                path: 'dashboard', 
                component: WlDashboardComponent,
            },
            { 
                path: 'learning',
                component: WlLearningComponent,
            },
            { 
                path: 'profile',
                component: WlProfileComponent,
            },
            { 
                path: 'list',
                component: WlListComponent
            }
        ],
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }