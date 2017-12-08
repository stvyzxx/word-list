import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { Observable } from 'rxjs/Observable';

export interface usersData {
    uid: string;
    profilePic: string;
    userName: string;
    email: string;
}

@Injectable()
export class DataService {
  data: usersData;

  constructor() {
    this.data = {
      uid: null,
      profilePic: null,
      userName: null,
      email: null
    };
  }

  get currentUser() {
    return this.data.uid;
  }
}