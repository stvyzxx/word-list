import { Injectable } from '@angular/core';

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

  get currentUser(): any {
    return this.data.uid;
  }
}
