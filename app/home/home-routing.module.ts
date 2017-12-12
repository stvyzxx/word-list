import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { AuthGuard } from '../shared/services/auth-guard.service';

import { WlDashboardComponent } from './dashboard/dashboard.component';
import { WlHomeComponent } from './home.component';
import { WlLearningComponent } from './learning/learning.component';
import { WlListComponent } from './list/list.component';
import { WlProfileComponent } from './profile/profile.component';
import { ListsResolver, ListResolver } from './services/resolvers.service';

const routes: Routes = [
  {
    path: '',
    component: WlHomeComponent,
    children: [
      {
        path: 'dashboard',
        component: WlDashboardComponent,
        canActivate: [AuthGuard],
        resolve: {
          lists: ListsResolver
        }
      },
      {
        path: 'learning',
        component: WlLearningComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        component: WlProfileComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'list',
        component: WlListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'list/:id',
        component: WlListComponent,
        canActivate: [AuthGuard],
        resolve: {
          list: ListResolver
        }
      }
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule],
    providers: [ListsResolver, ListResolver]
})
export class HomeRoutingModule { }
