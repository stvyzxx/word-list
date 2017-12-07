import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { ApiService } from './api.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
        private apiService: ApiService,
        private routerExtensions: RouterExtensions
    ) { }

    canActivate() {
        return this.apiService.getCurrentUser().then(
            result => {
                console.log('user logged in')
                return true;
            },
            errorMessage => {
                this.routerExtensions.navigate(['auth/login']);
                return false;
            }
        );
    }
}