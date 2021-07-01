import { Component } from '@angular/core';

import { RovaSidebarService } from '@rova/components/sidebar/sidebar.service';

@Component({
    selector   : 'carded-left-sidebar-tabbed-1',
    templateUrl: './left-sidebar-tabbed-1.component.html',
    styleUrls  : ['./left-sidebar-tabbed-1.component.scss']
})
export class CardedLeftSidebarTabbed1Component
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
