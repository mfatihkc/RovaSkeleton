import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { RovaSharedModule } from '@rova/shared.module';
import { RovaHighlightModule } from '@rova/components';

import { HelperClassesComponent } from 'app/main/ui/helper-classes/helper-classes.component';
import { HelperClassesPaddingMarginComponent } from 'app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component';
import { HelperClassesWidthHeightComponent } from 'app/main/ui/helper-classes/tabs/width-height/width-height.component';

const routes: Routes = [
    {
        path     : 'helper-classes',
        component: HelperClassesComponent
    }
];

@NgModule({
    declarations: [
        HelperClassesComponent,
        HelperClassesPaddingMarginComponent,
        HelperClassesWidthHeightComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,
        MatTabsModule,

        RovaSharedModule,
        RovaHighlightModule,
    ],
})
export class UIHelperClassesModule
{
}
