import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

import { ApiService } from '../../shared/services/api.service';
import { HelpersService } from '../../shared/services/helpers.service';

@Component({
  selector: 'WlLists',
  moduleId: module.id,
  templateUrl: './lists.component.html'
})
export class WlListsComponent implements OnInit {
  lists: any;

  constructor(
    private route: ActivatedRoute,
    private routerExtensions: RouterExtensions,
    private apiService: ApiService,
    private helpersService: HelpersService
  ) { }

  ngOnInit() {
    this.lists = this.helpersService.objectToArray(this.route.snapshot.data.lists.value);
  }
}