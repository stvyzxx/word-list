import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ApiService } from '../../shared/services/api.service';
import { HelpersService } from '../../shared/services/helpers.service';

class List {
  public name: string;
  public id: string;
  public words: any[];

  constructor(options = {}) {
    Object.assign(this, {
      name : null,
      id : null,
      words : [],
    }, options);
  }
}

@Component({
  selector: 'WlList',
  moduleId: module.id,
  templateUrl: './list.component.html'
})
export class WlListComponent implements OnInit {
  list: List;

  constructor(
    private apiService: ApiService,
    private helpersService: HelpersService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.setList();
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
      path: '/lists' + (this.list.id ? '/' + this.list.id : ''),
      data: this.list
    };
    console.log(data.path);
    this.apiService.setUserData(data);
  }

  setList(): any {
    let id;

    this.route.params
      .forEach(params => { id = params.id; });

    if (id) {
      this.apiService.getUserData({
        path: '/lists/' + id
      }).then(list => {
        this.list = new List({
          name: list.value.name,
          id: list.key,
          words: list.value.words
        });
      }).catch(e => {
        console.log(e);
      });
    } else {
      this.list = new List();
    }
  }
}
