import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NSModuleFactoryLoader } from 'nativescript-angular/router';

import { NativeScriptUIDataFormModule } from 'nativescript-pro-ui/dataform/angular';

import { AppRoutingModule } from './app-routing.module';
import { ApiService } from './shared/services/api.service';
import { AuthGuard } from './shared/services/auth-guard.service';
import { DataService } from './shared/services/data.service';
import { HelpersService } from './shared/services/helpers.service';

import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptUIDataFormModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    ApiService,
    AuthGuard,
    DataService,
    HelpersService,
    { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
