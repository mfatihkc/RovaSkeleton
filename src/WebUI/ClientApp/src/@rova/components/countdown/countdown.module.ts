import { NgModule } from '@angular/core';

import { RovaCountdownComponent } from '@rova/components/countdown/countdown.component';

@NgModule({
    declarations: [
        RovaCountdownComponent
    ],
    exports: [
        RovaCountdownComponent
    ],
})
export class RovaCountdownModule
{
}
