import { Injectable, NgModule } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../../shared/services/api.service';

@Injectable()
export class ListsResolver implements Resolve<any> {
  constructor(
    private apiService: ApiService
  ) {}

  resolve(): Promise<any> {
    const params = {
      path: '/lists',
      limit: 10
    };
    return this.apiService
      .getUserData(params);
  }
}
