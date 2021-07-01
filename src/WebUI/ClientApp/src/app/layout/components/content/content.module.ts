import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RovaSharedModule } from '@rova/shared.module';

import { ContentComponent } from 'app/layout/components/content/content.component';

@NgModule({
    declarations: [
        ContentComponent
    ],
    imports     : [
        RouterModule,
        RovaSharedModule
    ],
    exports     : [
        ContentComponent
    ]
})
export class ContentModule
{
}
