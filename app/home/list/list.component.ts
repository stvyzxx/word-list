import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

import { ApiService } from '../../shared/services/api.service';

class List {
  public name: string = null;
  public words: any[] = [];
}

@Component({
  selector: 'WlList',
  moduleId: module.id,
  templateUrl: './list.component.html'
})
export class WlListComponent implements OnInit {
  list: List;

  constructor(
      private routerExtensions: RouterExtensions,
      private apiService: ApiService
  ) { }

  ngOnInit () {
      this.list = new List();
  }

  addPair () {
    const pair = {
      original: null,
      translation: null
    }
    this.list.words.push(pair);
  }

  removePair (index) {
    this.list.words.splice(index, 1);
  }

  saveList () {

  }
}