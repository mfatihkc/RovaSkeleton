import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';

import { RovaSharedModule } from '@rova/shared.module';

import { DocsChangelogComponent } from 'app/main/documentation/changelog/changelog.component';

const routes: Routes = [
    {
        path     : 'changelog',
        component: DocsChangelogComponent
    },
    {
        path        : 'getting-started',
        loadChildren: () => import('./getting-started/getting-started.module').then(m => m.GettingStartedModule)
    },
    {
        path        : 'working-with-rova',
        loadChildren: () => import('./working-with-rova/working-with-rova.module').then(m => m.WorkingWithRovaModule)
    },
    {
        path        : 'components',
        loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
    },
    {
        path        : 'components-third-party',
        loadChildren: () => import('./components-third-party/components-third-party.module').then(m => m.ComponentsThirdPartyModule)
    },
    {
        path        : 'directives',
        loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule)
    },
    {
        path        : 'services',
        loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)
    }
];

@NgModule({
    declarations: [
        DocsChangelogComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,

        RovaSharedModule
    ]
})
export class DocumentationModule
{
}
