import { NgModule } from '@angular/core';

import { RovaWidgetComponent } from './widget.component';
import { RovaWidgetToggleDirective } from './widget-toggle.directive';

@NgModule({
    declarations: [
        RovaWidgetComponent,
        RovaWidgetToggleDirective
    ],
    exports     : [
        RovaWidgetComponent,
        RovaWidgetToggleDirective
    ],
})
export class RovaWidgetModule
{
}
