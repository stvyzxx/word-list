import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { WlAuthComponent } from './auth.component';
import { WlLoginComponent } from './login/login.component';
import { WlRegistrationComponent } from './registration/registration.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    imports: [
        AuthRoutingModule,
        NativeScriptModule,
        NativeScriptFormsModule
    ],
    declarations: [
        WlAuthComponent,
        WlLoginComponent,
        WlRegistrationComponent
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AuthModule { }