import { Injectable, NgModule } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../../shared/services/api.service';

@Injectable()
export class ListsResolver implements Resolve<any> {
  constructor(
    private apiService: ApiService
  ) {}

  resolve(): Promise<any>|any {
    const params = {
      path: '/lists'
    };
    return this.apiService
      .getUserData(params);
  }
}
