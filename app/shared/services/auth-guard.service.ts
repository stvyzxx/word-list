import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { ApiService } from './api.service';
import { DataService } from './data.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private apiService: ApiService,
    private routerExtensions: RouterExtensions,
    private dataService: DataService
  ) { }

  canActivate() {
    return this.apiService.getCurrentUser()
      .then(
        result => {
          console.log('user logged in');
          this.dataService.data.uid = result.uid;
          return true;
        },
        errorMessage => {
          this.routerExtensions.navigate(['auth/login']);
          return false;
        }
      );
  }
}
