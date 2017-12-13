import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

import { ApiService } from '../../shared/services/api.service';

import { HelpersService } from '../../shared/services/helpers.service';

@Component({
  selector: 'WlDashboard',
  moduleId: module.id,
  templateUrl: './dashboard.component.html'
})
export class WlDashboardComponent implements OnInit {
  lists: any;
  data: any;

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
