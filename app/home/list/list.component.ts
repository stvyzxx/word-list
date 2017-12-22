import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import 'rxjs/add/operator/switchMap';

import { ActivityIndicator } from 'ui/activity-indicator';

import { ApiService } from '../../shared/services/api.service';
import { HelpersService } from '../../shared/services/helpers.service';

import { List } from '../models/list/list';

@Component({
  selector: 'WlList',
  moduleId: module.id,
  templateUrl: './list.component.html'
})
export class WlListComponent implements OnInit {
  list: List;
  busyState: boolean;

  constructor(
    private apiService: ApiService,
    private helpersService: HelpersService,
    private route: ActivatedRoute,
    private routerExtensions: RouterExtensions
  ) {
    this.busyState = false;
  }

  ngOnInit(): void {
    this.setList();
  }

  addPair(): void {
    const pair = {
      original: null,
      translation: null
    };
    this.list.words.push(pair);
  }

  removePair(index): void {
    this.list.words.splice(index, 1);
  }

  saveList(): void {
    const data = {
      path: '/lists' + (this.list.id ? '/' + this.list.id : ''),
      data: this.list,
      method: 'push'
    };

    if (this.list.id) {
      data.method = 'update';
    }
    this.busyState = true;

    this.apiService.setUserData(data)
      .then(response => {
        this.routerExtensions.navigate(['home/dashboard']);
      }).catch(e => {
        this.busyState = false;
        console.log(e);
      });

  }

  setList(): any {
    let id;

    this.route.params
      .forEach(params => { id = params.id; });

    if (id) {
      this.busyState = true;
      this.apiService.getUserData({
        path: '/lists/' + id
      }).then(list => {
        this.list = new List({
          name: list.value.name,
          id: list.key,
          words: list.value.words
        });
        this.busyState = false;
      }).catch(e => {
        this.busyState = false;
        console.log(e);
      });
    } else {
      this.list = new List();
    }
  }
}
