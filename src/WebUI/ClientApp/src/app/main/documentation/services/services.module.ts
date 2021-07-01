import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { RovaSharedModule } from '@rova/shared.module';
import { RovaHighlightModule } from '@rova/components/index';

import { RovaConfigServiceDocsComponent } from 'app/main/documentation/services/rova-config/rova-config.component';
import { RovaSplashScreenServiceDocsComponent } from 'app/main/documentation/services/rova-splash-screen/rova-splash-screen.component';

const routes = [
    {
        path     : 'rova-config',
        component: RovaConfigServiceDocsComponent
    },
    {
        path     : 'rova-splash-screen',
        component: RovaSplashScreenServiceDocsComponent
    }
];

@NgModule({
    declarations: [
        RovaConfigServiceDocsComponent,
        RovaSplashScreenServiceDocsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,

        RovaSharedModule,
        RovaHighlightModule
    ]
})

export class ServicesModule
{
}
