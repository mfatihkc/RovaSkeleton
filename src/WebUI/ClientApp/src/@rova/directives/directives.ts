import { NgModule } from '@angular/core';

import { RovaIfOnDomDirective } from '@rova/directives/rova-if-on-dom/rova-if-on-dom.directive';
import { RovaInnerScrollDirective } from '@rova/directives/rova-inner-scroll/rova-inner-scroll.directive';
import { RovaPerfectScrollbarDirective } from '@rova/directives/rova-perfect-scrollbar/rova-perfect-scrollbar.directive';
import { RovaMatSidenavHelperDirective, RovaMatSidenavTogglerDirective } from '@rova/directives/rova-mat-sidenav/rova-mat-sidenav.directive';

@NgModule({
    declarations: [
        RovaIfOnDomDirective,
        RovaInnerScrollDirective,
        RovaMatSidenavHelperDirective,
        RovaMatSidenavTogglerDirective,
        RovaPerfectScrollbarDirective
    ],
    imports     : [],
    exports     : [
        RovaIfOnDomDirective,
        RovaInnerScrollDirective,
        RovaMatSidenavHelperDirective,
        RovaMatSidenavTogglerDirective,
        RovaPerfectScrollbarDirective
    ]
})
export class RovaDirectivesModule
{
}
