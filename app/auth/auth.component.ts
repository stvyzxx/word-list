import { Component } from '@angular/core';
import { Page } from "ui/page";

@Component({
    selector: 'WlAuth',
    moduleId: module.id,
    styleUrls: ['./auth.component.css'],
    templateUrl: './auth.component.html'
})
export class WlAuthComponent{
    constructor(
        page: Page
    ) {
        page.actionBarHidden = true;
    }
}