import { Component, Input, OnInit } from '@angular/core';

// import { List } from '../models/list/list';

@Component({
  selector: 'wl-word-list',
  moduleId: module.id,
  templateUrl: './word-lists.component.html'
})
export class WlWordListsComponent {
  @Input() items: any[];
  // list: List;
  busyState: boolean;

  constructor(
  ) {
    this.busyState = false;
  }

  // ngOnInit(): void {}
}
