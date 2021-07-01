import { Component, ViewEncapsulation } from '@angular/core';

import { RovaConfigService } from '@rova/services/config.service';
import { rovaAnimations } from '@rova/animations';

@Component({
    selector     : 'mail-confirm',
    templateUrl  : './mail-confirm.component.html',
    styleUrls    : ['./mail-confirm.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : rovaAnimations
})
export class MailConfirmComponent
{
    /**
     * Constructor
     *
     * @param {RovaConfigService} _rovaConfigService
     */
    constructor(
        private _rovaConfigService: RovaConfigService
    )
    {
        // Configure the layout
        this._rovaConfigService.config = {
            layout: {
                navbar   : {
                    hidden: true
                },
                toolbar  : {
                    hidden: true
                },
                footer   : {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }
}
