import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { RovaSharedModule } from '@rova/shared.module';
import { RovaHighlightModule } from '@rova/components';

import { DocsWorkingWithRovaServerComponent } from 'app/main/documentation/working-with-rova/server/server.component';
import { DocsWorkingWithRovaProductionComponent } from 'app/main/documentation/working-with-rova/production/production.component';
import { DocsWorkingWithRovaDirectoryStructureComponent } from 'app/main/documentation/working-with-rova/directory-structure/directory-structure.component';
import { DocsWorkingWithRovaUpdatingRovaComponent } from 'app/main/documentation/working-with-rova/updating-rova/updating-rova.component';
import { DocsWorkingWithRovaMultiLanguageComponent } from 'app/main/documentation/working-with-rova/multi-language/multi-language.component';
import { DocsWorkingWithRovaMaterialThemingComponent } from 'app/main/documentation/working-with-rova/material-theming/material-theming.component';
import { DocsWorkingWithRovaThemeLayoutsComponent } from 'app/main/documentation/working-with-rova/theme-layouts/theme-layouts.component';
import { DocsWorkingWithRovaPageLayoutsComponent } from 'app/main/documentation/working-with-rova/page-layouts/page-layouts.component';

const routes = [
    {
        path     : 'server',
        component: DocsWorkingWithRovaServerComponent
    },
    {
        path     : 'production',
        component: DocsWorkingWithRovaProductionComponent
    },
    {
        path     : 'directory-structure',
        component: DocsWorkingWithRovaDirectoryStructureComponent
    },
    {
        path     : 'updating-rova',
        component: DocsWorkingWithRovaUpdatingRovaComponent
    },
    {
        path     : 'multi-language',
        component: DocsWorkingWithRovaMultiLanguageComponent
    },
    {
        path     : 'material-theming',
        component: DocsWorkingWithRovaMaterialThemingComponent
    },
    {
        path     : 'theme-layouts',
        component: DocsWorkingWithRovaThemeLayoutsComponent
    },
    {
        path     : 'page-layouts',
        component: DocsWorkingWithRovaPageLayoutsComponent
    }
];

@NgModule({
    declarations: [
        DocsWorkingWithRovaServerComponent,
        DocsWorkingWithRovaProductionComponent,
        DocsWorkingWithRovaDirectoryStructureComponent,
        DocsWorkingWithRovaUpdatingRovaComponent,
        DocsWorkingWithRovaMaterialThemingComponent,
        DocsWorkingWithRovaMultiLanguageComponent,
        DocsWorkingWithRovaThemeLayoutsComponent,
        DocsWorkingWithRovaPageLayoutsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatIconModule,

        RovaSharedModule,
        RovaHighlightModule
    ]
})
export class WorkingWithRovaModule
{
}
