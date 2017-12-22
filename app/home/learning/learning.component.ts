import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../../shared/services/api.service';
import { List } from '../models/list/list';

@Component({
  selector: 'WlLearning',
  moduleId: module.id,
  templateUrl: './learning.component.html'
})
export class WlLearningComponent implements OnInit {
  list: List;
  busyState: boolean;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.setList();
  }

  setList(): any {
    let id;

    this.route.params
      .forEach(params => { id = params.id; });

    this.busyState = true;
    this.apiService.getUserData({
      path: '/lists/' + id
    }).then(response => {
      this.list = response.value;
      this.busyState = false;
    }).catch(e => {
      this.busyState = false;
      console.log(e);
    });
  }
}
