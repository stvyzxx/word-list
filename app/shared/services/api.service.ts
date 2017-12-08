import { Injectable } from '@angular/core';
import { DataService } from './data.service';

import firebase = require('nativescript-plugin-firebase');

@Injectable()
export class ApiService {

  constructor(
    private dataService: DataService
  ) {}

  getCurrentUser() {
    return firebase.getCurrentUser();
  }

  logIn(user) {
    return firebase.login({
      type: firebase.LoginType.PASSWORD,
      passwordOptions: {
        email: user.email,
        password: user.password
      }
    });
  }

  logOut() {
    return firebase.logout();
  }

  register(user) {
    return firebase.createUser({
      email: user.email,
      password: user.password
    });
  }

  setUserData(dataToSave) {
    firebase.push(
      '/users/' + this.dataService.currentUser + dataToSave.path,
      dataToSave.data
    );
  }
}
