import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { RovaModule } from '@rova/rova.module';
import { RovaSharedModule } from '@rova/shared.module';
import { RovaProgressBarModule, RovaSidebarModule, RovaThemeOptionsModule } from '@rova/components';

import { rovaConfig } from 'app/rova-config';

import { FakeDbService } from 'app/fake-db/fake-db.service';
import { AppComponent } from 'app/app.component';
import { AppStoreModule } from 'app/store/store.module';
import { LayoutModule } from 'app/layout/layout.module';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { JwtInterceptorService } from '../app/main/pages/authentication/services/jwt-interceptor.service';
import { API_BASE_URL } from './Rova-api';
import { AuthGuard } from './main/pages/authentication/services/auth.guard';

const appRoutes: Routes = [
    {
        path        : 'apps',
        canActivate: [AuthGuard],
        loadChildren: () => import('./main/apps/apps.module').then(m => m.AppsModule)
    },
    {
        path        : 'pages',
        loadChildren: () => import('./main/pages/pages.module').then(m => m.PagesModule)
    },
    {
        path        : 'ui',
        canActivate: [AuthGuard],
        loadChildren: () => import('./main/ui/ui.module').then(m => m.UIModule)
    },
    {
        path        : 'documentation',
        canActivate: [AuthGuard],
        loadChildren: () => import('./main/documentation/documentation.module').then(m => m.DocumentationModule)
    },
    {
        path      : '**',
        redirectTo: 'pages/auth/login'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay             : 0,
            passThruUnknownUrl: true
        }),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Rova modules
        RovaModule.forRoot(rovaConfig),
        RovaProgressBarModule,
        RovaSharedModule,
        RovaSidebarModule,
        RovaThemeOptionsModule,

        // App modules
        LayoutModule,
        AppStoreModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule
    ],
    providers: [
      { provide: HTTP_INTERCEPTORS, useExisting: JwtInterceptorService, multi: true },
      { provide: API_BASE_URL, useValue: environment.apiUrl },
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
