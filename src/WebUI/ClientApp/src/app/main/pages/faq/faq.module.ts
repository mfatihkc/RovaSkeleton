import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { RovaSharedModule } from '@rova/shared.module';

import { FaqService } from 'app/main/pages/faq/faq.service';
import { FaqComponent } from 'app/main/pages/faq/faq.component';

const routes = [
    {
        path     : 'faq',
        component: FaqComponent,
        resolve  : {
            faq: FaqService
        }
    }
];

@NgModule({
    declarations: [
        FaqComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatExpansionModule,
        MatIconModule,

        RovaSharedModule
    ],
    providers   : [
        FaqService
    ]
})
export class FaqModule
{
}
