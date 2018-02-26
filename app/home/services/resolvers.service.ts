import { Injectable, NgModule } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';

import { ApiService } from '../../shared/services/api.service';

@Injectable()
export class ListsResolver implements Resolve<any> {
  constructor(
    private apiService: ApiService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Promise<any> {
    const params = Object.assign(
      { path: '/lists' },
      route.data.listsResolverParams
    );


    return this.apiService
      .getUserData(params);
  }
}
