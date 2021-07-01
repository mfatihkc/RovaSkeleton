import { Component, ViewEncapsulation } from '@angular/core';

import { RovaConfigService } from '@rova/services/config.service';
import { rovaAnimations } from '@rova/animations';

@Component({
    selector     : 'maintenance',
    templateUrl  : './maintenance.component.html',
    styleUrls    : ['./maintenance.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : rovaAnimations
})
export class MaintenanceComponent
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
