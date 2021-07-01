import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { RovaSharedModule } from '@rova/shared.module';
import { RovaHighlightModule } from '@rova/components';

import { DocsGettingStartedIntroductionComponent } from 'app/main/documentation/getting-started/introduction/introduction.component';
import { DocsGettingStartedInstallationComponent } from 'app/main/documentation/getting-started/installation/installation.component';

const routes = [
    {
        path     : 'introduction',
        component: DocsGettingStartedIntroductionComponent
    },
    {
        path     : 'installation',
        component: DocsGettingStartedInstallationComponent
    }
];

@NgModule({
    declarations: [
        DocsGettingStartedIntroductionComponent,
        DocsGettingStartedInstallationComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,

        RovaSharedModule,
        RovaHighlightModule
    ]
})
export class GettingStartedModule
{
}
