import { NgModule } from '@angular/core';

import { RovaSidebarComponent } from './sidebar.component';

@NgModule({
    declarations: [
        RovaSidebarComponent
    ],
    exports     : [
        RovaSidebarComponent
    ]
})
export class RovaSidebarModule
{
}
