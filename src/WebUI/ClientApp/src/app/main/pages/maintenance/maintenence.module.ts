import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RovaSharedModule } from '@rova/shared.module';

import { MaintenanceComponent } from 'app/main/pages/maintenance/maintenance.component';

const routes = [
    {
        path     : 'maintenance',
        component: MaintenanceComponent
    }
];

@NgModule({
    declarations: [
        MaintenanceComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        RovaSharedModule
    ]
})
export class MaintenanceModule
{
}
