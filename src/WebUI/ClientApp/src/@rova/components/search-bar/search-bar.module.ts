import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { RovaSearchBarComponent } from './search-bar.component';

@NgModule({
    declarations: [
        RovaSearchBarComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        RovaSearchBarComponent
    ]
})
export class RovaSearchBarModule
{
}
