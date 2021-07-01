import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { RovaSharedModule } from '@rova/shared.module';
import { RovaDemoModule } from '@rova/components/demo/demo.module';

import { ColorsComponent } from 'app/main/ui/colors/colors.component';

const routes: Routes = [
    {
        path     : 'colors',
        component: ColorsComponent
    }
];

@NgModule({
    declarations: [
        ColorsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatIconModule,
        MatTabsModule,

        RovaSharedModule,
        RovaDemoModule
    ]
})
export class UIColorsModule
{
}
