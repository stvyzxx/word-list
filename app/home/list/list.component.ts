import { Component, OnInit } from '@angular/core';


class List {
    public name: string = null;
    public words: any[] = [];
    constructor(
    ) { 
    }
}

@Component({
    selector: 'WlList',
    moduleId: module.id,
    templateUrl: './list.component.html'
})
export class WlListComponent implements OnInit {
    list: any;
    constructor(
    ) { 
    }

    ngOnInit () {
        this.list = new List();
    }
}