import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { WlAuthComponent } from './auth.component';
import { WlLoginComponent } from './login/login.component';
import { WlRegistrationComponent } from './registration/registration.component';

const routes: Routes = [
    {
        path: '',
        component: WlAuthComponent,
        children: [
            { path: 'login', component: WlLoginComponent },
            { path: 'registration', component: WlRegistrationComponent },
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AuthRoutingModule { }
