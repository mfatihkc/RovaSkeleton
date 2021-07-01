import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { RovaSharedModule } from '@rova/shared.module';
import { RovaHighlightModule } from '@rova/components';

import { DocsDirectivesRovaIfOnDomComponent } from 'app/main/documentation/directives/rovaIfOnDom/rova-if-on-dom.component';
import { DocsDirectivesRovaInnerScrollComponent } from 'app/main/documentation/directives/rovaInnerScroll/rova-inner-scroll.component';
import { DocsDirectivesRovaMatSidenavComponent } from 'app/main/documentation/directives/rovaMatSidenav/rova-mat-sidenav.component';
import { DocsDirectivesRovaPerfectScrollbarComponent } from 'app/main/documentation/directives/rovaPerfectScrollbar/rova-perfect-scrollbar.component';

const routes = [
    {
        path     : 'rova-if-on-dom',
        component: DocsDirectivesRovaIfOnDomComponent
    },
    {
        path     : 'rova-inner-scroll',
        component: DocsDirectivesRovaInnerScrollComponent
    },
    {
        path     : 'rova-mat-sidenav',
        component: DocsDirectivesRovaMatSidenavComponent
    },
    {
        path     : 'rova-perfect-scrollbar',
        component: DocsDirectivesRovaPerfectScrollbarComponent
    }
];

@NgModule({
    declarations: [
        DocsDirectivesRovaIfOnDomComponent,
        DocsDirectivesRovaInnerScrollComponent,
        DocsDirectivesRovaMatSidenavComponent,
        DocsDirectivesRovaPerfectScrollbarComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatIconModule,

        RovaSharedModule,
        RovaHighlightModule
    ]
})
export class DirectivesModule
{
}
