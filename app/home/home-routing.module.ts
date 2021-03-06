import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { AuthGuard } from '../shared/services/auth-guard.service';

import { WlDashboardComponent } from './dashboard/dashboard.component';
import { WlHomeComponent } from './home.component';
import { WlLearningComponent } from './learning/learning.component';
import { WlListComponent } from './list/list.component';
import { WlListsComponent } from './lists/lists.component';
import { WlProfileComponent } from './profile/profile.component';

import { ListsResolver } from './services/resolvers.service';

const routes: Routes = [
  {
    path: '',
    component: WlHomeComponent,
    children: [
      {
        path: 'dashboard',
        component: WlDashboardComponent,
        data : {
          page : 'Dashboard',
          listsResolverParams: {
            limit: 6
          }
        },
        canActivate: [AuthGuard],
        resolve: {
          lists: ListsResolver
        }
      },
      {
        path: 'profile',
        component: WlProfileComponent,
        data : { page : 'Profile' },
        canActivate: [AuthGuard]
      },
      {
        path: 'learning/:id',
        component: WlLearningComponent,
        data : { page : 'Learning' },
        canActivate: [AuthGuard]
      },
      {
        path: 'list',
        component: WlListComponent,
        data : { page : 'List' },
        canActivate: [AuthGuard]
      },
      {
        path: 'list/:id',
        component: WlListComponent,
        data : { page : 'List' },
        canActivate: [AuthGuard]
      },
      {
        path: 'lists',
        component: WlListsComponent,
        data : {
          page : 'All saved lists',
          listsResolverParams: {
            limit: 10
          }
        },
        canActivate: [AuthGuard]
      },
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule],
    providers: [ListsResolver]
})
export class HomeRoutingModule { }
