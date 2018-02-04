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

  setUserData(params): Promise<any> {
    return firebase[params.method](
      '/users/' + this.dataService.currentUser + params.path,
      params.data
    );
  }

  getUserData(params): Promise<any> {
    const options: any = {
      singleEvent: true,
      orderBy: {
        type: firebase.QueryOrderByType.CHILD,
        value: 'since'
      },
    };

    const onQueryEvent = result => {
      if (!result.error) {
        // console.log("Event type: " + result.type);
        // console.log("Key: " + result.key);
        // console.log("Value: " + JSON.stringify(result.value));
      }
    };
    if (params.limit) {
      options.limit = {
        type: firebase.QueryLimitType.LAST,
        value: params.limit
      };
    }

    return firebase.query(
      onQueryEvent,
      '/users/' + this.dataService.currentUser + params.path,
      options
    );
  }
}
