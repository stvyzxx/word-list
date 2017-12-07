import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

import { ApiService } from '../../shared/services/api.service';

@Component({
    selector: 'WlProfile',
    moduleId: module.id,
    templateUrl: './profile.component.html'
})
export class WlProfileComponent{
    constructor(
        private apiService: ApiService,
        private routerExtensions: RouterExtensions
    ) { }

    logOut() {
        this.apiService.logOut().then(response => {
            this.routerExtensions.navigate(['auth/login']);
        });
    }
}