import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/home/dashboard', pathMatch: 'full' },
    { path: 'auth', loadChildren: 'auth/auth.module#AuthModule' },
    { path: 'home', loadChildren: 'home/home.module#HomeModule' },
    { path: 'tabs', loadChildren: './tabs/tabs.module#TabsModule' },
    // { path: 'contact', loadChildren: './contact/contact.module#ContactModule' }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }