import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AgmCoreModule } from '@agm/core';

import { RovaSharedModule } from '@rova/shared.module';
import { RovaHighlightModule } from '@rova/components/index';

import { DocsComponentsThirdPartyGoogleMapsComponent } from './google-maps.component';
import { environment } from 'environments/environment';

const routes = [
    {
        path     : 'google-maps',
        component: DocsComponentsThirdPartyGoogleMapsComponent
    }
];

@NgModule({
    declarations: [
        DocsComponentsThirdPartyGoogleMapsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatIconModule,

        AgmCoreModule.forRoot({
            apiKey: environment.firebase.apiKey
        }),

        RovaSharedModule,
        RovaHighlightModule
    ],
})
export class GoogleMapsModule
{
}
