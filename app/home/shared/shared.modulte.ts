import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { WlWordListsComponent } from './components/word-lists';

@NgModule({
    imports: [],
    declarations: [
      WlWordListsComponent
    ],
    entryComponents: [
      WlWordListsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeSharedModule { }
