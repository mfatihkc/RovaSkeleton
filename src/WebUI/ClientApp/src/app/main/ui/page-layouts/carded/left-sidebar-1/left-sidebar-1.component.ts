import { Component } from '@angular/core';

import { RovaSidebarService } from '@rova/components/sidebar/sidebar.service';

@Component({
    selector   : 'carded-left-sidebar-1',
    templateUrl: './left-sidebar-1.component.html',
    styleUrls  : ['./left-sidebar-1.component.scss']
})
export class CardedLeftSidebar1Component
{
    /**
     * Constructor
     *
     * @param {RovaSidebarService} _rovaSidebarService
     */
    constructor(
        private _rovaSidebarService: RovaSidebarService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar
     *
     * @param name
     */
    toggleSidebar(name): void
    {
        this._rovaSidebarService.getSidebar(name).toggleOpen();
    }
}
