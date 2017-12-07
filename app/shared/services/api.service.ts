import { Injectable } from '@angular/core';

import firebase = require('nativescript-plugin-firebase');


@Injectable()
export class ApiService {
    constructor() { }

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
        })
    }

    logOut() {
        return firebase.logout();
    }

    register(user) {
        return firebase.createUser({
            email: user.email,
            password: user.password
        })
    }
}