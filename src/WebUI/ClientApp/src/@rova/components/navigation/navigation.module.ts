import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

import { TranslateModule } from '@ngx-translate/core';

import { RovaNavigationComponent } from './navigation.component';
import { RovaNavVerticalItemComponent } from './vertical/item/item.component';
import { RovaNavVerticalCollapsableComponent } from './vertical/collapsable/collapsable.component';
import { RovaNavVerticalGroupComponent } from './vertical/group/group.component';
import { RovaNavHorizontalItemComponent } from './horizontal/item/item.component';
import { RovaNavHorizontalCollapsableComponent } from './horizontal/collapsable/collapsable.component';

@NgModule({
    imports     : [
        CommonModule,
        RouterModule,

        MatIconModule,
        MatRippleModule,

        TranslateModule.forChild()
    ],
    exports     : [
        RovaNavigationComponent
    ],
    declarations: [
        RovaNavigationComponent,
        RovaNavVerticalGroupComponent,
        RovaNavVerticalItemComponent,
        RovaNavVerticalCollapsableComponent,
        RovaNavHorizontalItemComponent,
        RovaNavHorizontalCollapsableComponent
    ]
})
export class RovaNavigationModule
{
}
