import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { RovaDemoContentComponent } from './demo-content/demo-content.component';
import { RovaDemoSidebarComponent } from './demo-sidebar/demo-sidebar.component';

@NgModule({
    declarations: [
        RovaDemoContentComponent,
        RovaDemoSidebarComponent
    ],
    imports     : [
        RouterModule,

        MatDividerModule,
        MatListModule
    ],
    exports     : [
        RovaDemoContentComponent,
        RovaDemoSidebarComponent
    ]
})
export class RovaDemoModule
{
}
