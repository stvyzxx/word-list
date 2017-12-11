import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../../shared/services/api.service';
import { HelpersService } from '../../shared/services/helpers.service';

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
  test: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private helpersService: HelpersService
  ) { }

  ngOnInit() {
    this.test = this.helpersService.objectToArray(this.route.snapshot.data['list'].value);
    console.log(JSON.stringify(this.test));
    this.list = new List();
  }

  addPair() {
    const pair = {
      original: null,
      translation: null
    };
    this.list.words.push(pair);
  }

  removePair(index) {
    this.list.words.splice(index, 1);
  }

  saveList() {
    const data = {
      path: '/lists',
      data: this.list
    };

    this.apiService.setUserData(data);
  }
}
